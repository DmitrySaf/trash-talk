import { Router } from 'express'
import { User } from "../models/user";
//const userController = require('../controllers/user-controller');
const router = new Router();
// const {body} = require('express-validator');
// const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration', async (req, res) => {
  const userId = req.body.phoneNumber + 'pisya-popa'
  const newUser = new User({
    userId,
    name: req.body.phoneNumber,
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
// router.get('/users', authMiddleware, userController.getUsers);

export default router