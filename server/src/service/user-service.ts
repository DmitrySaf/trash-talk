import { User as UserModel } from "../models/user"
import UserDto from "../dtos/user-dto";
import ChatService from "./chat-service";
import ApiError from "../exceptions/api-error";

export default class UserService {
  public static async registration(username: string) {
    const candidate = await UserModel.findOne({ username })

    if (candidate) {
      throw ApiError.BadRequest(`The user ${username} already exists`)
    }

    const user = await UserModel.create({ username })

    const userDto = new UserDto(user)

    return {
      user: userDto
    }
  }

  // async login(email, password) {
  //   const user = await UserModel.findOne({email})
  //   if (!user) {
  //     throw ApiError.BadRequest('Пользователь с таким email не найден')
  //   }
  //   const isPassEquals = await bcrypt.compare(password, user.password);
  //   if (!isPassEquals) {
  //     throw ApiError.BadRequest('Неверный пароль');
  //   }
  //   const userDto = new UserDto(user);
  //   const tokens = tokenService.generateTokens({...userDto});

  //   await tokenService.saveToken(userDto.id, tokens.refreshToken);
  //   return {...tokens, user: userDto}
  // }

  // async logout(refreshToken) {
  //   const token = await tokenService.removeToken(refreshToken);
  //   return token;
  // }

  // async refresh(refreshToken) {
  //   if (!refreshToken) {
  //     throw ApiError.UnauthorizedError();
  //   }
  //   const userData = tokenService.validateRefreshToken(refreshToken);
  //   const tokenFromDb = await tokenService.findToken(refreshToken);
  //   if (!userData || !tokenFromDb) {
  //     throw ApiError.UnauthorizedError();
  //   }
  //   const user = await UserModel.findById(userData.id);
  //   const userDto = new UserDto(user);
  //   const tokens = tokenService.generateTokens({...userDto});

  //   await tokenService.saveToken(userDto.id, tokens.refreshToken);
  //   return {...tokens, user: userDto}
  // }

  public static async getAllUsers() {
    const users = await UserModel.find();

    return users;
  }

  public static async getUserByUsername(username: string) {
    const user = await UserModel.findOne({ username });

    return user;
  }

  public static async getUserById(id: ObjectId) {
    const user = await UserModel.findById(id);

    return user;
  }

  public static async getUserChats(username: string) {
    const user = await UserModel.findOne({ username }, 'chats');

    if (user === null) {
      throw ApiError.BadRequest('The user doesnt exist')
    }
    const chats = await ChatService.getChatsByIds(user.chats)

    return chats;
  }

  public static async updateUserChats(user: any, newChatId: ObjectId) {
    await user.chats.push(newChatId)
    await user.save()
  }
}