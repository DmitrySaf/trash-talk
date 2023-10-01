import { Request, Response, NextFunction } from 'express';
import ChatService from "../service/chat-service";
import MessageService from "../service/message-service";
import ApiError from "../exceptions/api-error";

export default class SocketController {
  public static async connection(wss, ws) {
    async function broadcastMessage(message) {
      wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
      })
    }

    ws.on('message', async (message) => {
      message = JSON.parse(message)
  
      switch(message.event) {
        case 'message':
          const messageToPush = await MessageService.add([message.chatId], {
            username: message.username,
            text: message.message,
            date: message.date,
            isRead: true
          })
          const allMessages = await ChatService.getChatMessagesById(message.chatId)
  
          broadcastMessage(allMessages)
          break;
        case 'connection':
          const allMsgs = await ChatService.getChatMessagesById(message.chatId)

          broadcastMessage(allMsgs)
          break;
      }
    })
  }
}