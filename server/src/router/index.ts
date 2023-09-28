import { Router } from 'express'
import * as mongoose from 'mongoose'
import { User } from "../models/user"
import { Chat } from "../models/chat"
import { Messages } from "../models/messages"
//const userController = require('../controllers/user-controller');
const router = Router();
// const {body} = require('express-validator');
// const authMiddleware = require('../middlewares/auth-middleware');

router.post('/users', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    boards: [],
    folders: [],
    chats: []
  })

  await newUser.save()
  res.status(200).send('OK')
});
router.post('/chats', async (req, res) => {
  const { friendUsername, myUsername } = req.body
  const friend = await User.findOne({ username: friendUsername })

  const messages = new Messages({
    messages: []
  })

  await messages.save()

  const myChat = new Chat({
    friendUsername: friend?.username,
    friendAvatar: friend?.avatar,
    friendStatus: friend?.status,
    messagesId: messages._id
  })

  const me = await User.findOne({ username: myUsername })
  const friendChat = new Chat({
    friendUsername: me?.username,
    friendAvatar: me?.avatar,
    friendStatus: me?.status,
    messagesId: messages._id
  })

  await friendChat.save()
  await myChat.save()

  await friend?.chats.push(friendChat._id)
  await me?.chats.push(myChat._id)

  await friend?.save()
  await me?.save()

  res.status(200).send('OK')
});
router.get('/users/:username/chats', async (req, res) => {
  const username = req.params.username
  const { chats: chatsIds } = await User.findOne({ username }, 'chats')
  const chats = await Chat.find({ '_id': { $in: chatsIds } })
  const response = []

  for(const chat of chats) {
    const { messages } = await Messages.findById(chat.messagesId, 'messages')
    response.push({
      friendUsername: chat.friendUsername,
      messages
    })
  }
  

  res.send(response)
});

export default router