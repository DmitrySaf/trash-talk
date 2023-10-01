import { Message as MessageModel } from "../models/message"
import ChatService from "./chat-service";
import ChatDto from "../dtos/chat-dto";
import MessageDto from '../dtos/message-dto'
import ApiError from "../exceptions/api-error";

interface AddPayload {
  text: string
  isRead: boolean
  date: string
  username: string
}

export default class MessageService {
  public static async add(chatsIds: ObjectId[],{ text, isRead, date, username }: AddPayload) {
    const message = await MessageModel.create({
      text,
      isRead,
      date,
      username
    })
    const messageDto = new MessageDto(message)

    for (const chatId of chatsIds) {
      const chat = await ChatService.getChatById(chatId)

      await ChatService.addMessage(chat, messageDto.id)
    }


    return {
      message
    }
  }

  public static async getAllMessagesByIds(ids: ObjectId[]) {
    const messages = await MessageModel.find({ '_id': { $in: ids } })

    return messages
  }
}