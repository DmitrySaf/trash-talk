import { Router } from 'express'
import UserController from "../controllers/user-controller"
import ChatController from "../controllers/chat-controller";
const router = Router();

router.post('/users', UserController.registration);
router.get('/users/:username/chats', UserController.getUserChats);
router.post('/chats', ChatController.create);

export default router