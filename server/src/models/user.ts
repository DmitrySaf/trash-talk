import { Schema, model, type InferSchemaType, Document } from 'mongoose';
import { type ModelWithMongoDocument } from './types'

export enum UserStatus {
  ONLINE = 'ONLINE',
  BRB = 'BERIGHTBACK',
  OFFLINE = 'OFFLINE'
}

const UserSchema = new Schema(
  {
    avatar: String,
    status: {
      type: String,
      enum: UserStatus,
      default: UserStatus.OFFLINE
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    boards: {
      type: [Schema.ObjectId],
      default: []
    },
    folders: {
      type: [Schema.ObjectId],
      default: []
    },
    chats: {
      type: [Schema.ObjectId],
      default: []
    }
  },
);

export type User = ModelWithMongoDocument<typeof UserSchema>;
export const User = model('User', UserSchema);
