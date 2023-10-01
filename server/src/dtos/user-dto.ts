import { type User } from '../models/user'

export default class UserDto {
  username;
  id;

  constructor(model: User) {
    this.username = model.username;
    this.id = model._id;
  }
}