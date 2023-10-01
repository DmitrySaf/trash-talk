import { Request, Response, NextFunction } from 'express';
import ChatService from "../service/chat-service";
import ApiError from "../exceptions/api-error";

export default class ChatController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      // }
      const { myUsername, friendUsername } = req.body;
      const chatData = await ChatService.create(friendUsername, myUsername);

      return res.json(chatData);
    } catch (e) {
      next(e);
    }
  }

  
}