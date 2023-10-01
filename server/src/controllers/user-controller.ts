import { Request, Response, NextFunction } from 'express';
import UserService from "../service/user-service";
import ApiError from "../exceptions/api-error";
import ChatService from "../service/chat-service";
import MessageService from "../service/message-service";

export default class UserController {
  public static async registration(req: Request, res: Response, next: NextFunction) {
    try {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      // }
      const { username } = req.body;
      const userData = await UserService.registration(username);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  // async login(req, res, next) {
  //   try {
  //     const {email, password} = req.body;
  //     const userData = await userService.login(email, password);
  //     res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
  //     return res.json(userData);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  // async logout(req, res, next) {
  //   try {
  //     const {refreshToken} = req.cookies;
  //     const token = await userService.logout(refreshToken);
  //     res.clearCookie('refreshToken');
  //     return res.json(token);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  // async activate(req, res, next) {
  //   try {
  //     const activationLink = req.params.link;
  //     await userService.activate(activationLink);
  //     return res.redirect(process.env.CLIENT_URL);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  // async refresh(req, res, next) {
  //   try {
  //     const {refreshToken} = req.cookies;
  //     const userData = await userService.refresh(refreshToken);
  //     res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
  //     return res.json(userData);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAllUsers();

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public static async getUserChats(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.params
      const chats = await UserService.getUserChats(username);
      const payload = []
      for (const chat of chats) {
        const friend = await UserService.getUserById(chat.friendId)
        const messages = await MessageService.getAllMessagesByIds(chat.messagesIds)

        payload.push({
          friend: {
            username: friend?.username,
            status: friend?.status
          },
          messages
        })
      }

      return res.json(payload);
    } catch (e) {
      next(e);
    }
  }
}