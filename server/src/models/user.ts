
import { Schema, model, type InferSchemaType } from 'mongoose';
import { BoardSchema } from './board';
import { FolderSchema } from './folder';
import { ChatSchema } from './chat';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      
    },
    boards: [BoardSchema],
    folders: [FolderSchema],
    chats: [ChatSchema]
  },
);

export type User = InferSchemaType<typeof UserSchema>;
export const User = model('User', UserSchema);
