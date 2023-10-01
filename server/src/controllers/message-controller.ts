import { Request, Response, NextFunction } from 'express';
import ChatService from "../service/chat-service";
import MessageService from "../service/message-service";
import ApiError from "../exceptions/api-error";

export default class MessageController {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      // }
      const { myUsername, friendUsername } = req.body;
      const chatData = await MessageService.add(friendUsername, myUsername);

      return res.json(chatData);
    } catch (e) {
      next(e);
    }
  }
}