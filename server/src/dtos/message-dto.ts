import { type Message } from '../models/message'

export default class MessageDto {
  text;
  isRead;
  date;
  username;
  id;

  constructor(model: Message) {
    this.text = model.text;
    this.isRead = model.isRead;
    this.date = model.date;
    this.username = model.username;
    this.id = model._id;
  }
}