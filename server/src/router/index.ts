import { Router } from 'express'
import * as mongoose from 'mongoose'
import { User } from "../models/user"
import { Chat } from "../models/chat"
//const userController = require('../controllers/user-controller');
const router = new Router();
// const {body} = require('express-validator');
// const authMiddleware = require('../middlewares/auth-middleware');

router.post('/users', async (req, res) => {
  const newUser = new User({
    name: req.body.username,
    boards: [],
    folders: [],
    chats: []
  })

  await newUser.save()
  res.status(200).send('OK')
});
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);
// router.get('/users/:userId', userController.activate);
// router.get('/refresh', userController.refresh);
router.get('/users/:id/chats', async (req, res) => {
  const userId = req.params.id
  const { chats } = await User.findById(userId, 'chats')

  res.send(chats)
});

export default router