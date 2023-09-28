
import { Schema, model, type InferSchemaType } from 'mongoose';
import { BoardSchema } from './board';
import { FolderSchema } from './folder';
import { ChatSchema } from './chat';

const UserSchema = new Schema(
  {
    avatar: {
      type: String
    },
    status: {
      type: String
    },
    username: {
      type: String
    },
    boards: [BoardSchema],
    folders: [FolderSchema],
    chats: {
      type: Array
    }
  },
);

export type User = InferSchemaType<typeof UserSchema>;
export const User = model('User', UserSchema);
