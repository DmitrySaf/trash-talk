
import { Schema, model, type InferSchemaType } from 'mongoose';

// TODO: заменить на userID
export const ChatSchema = new Schema(
  {
    friendUsername: {
      type: String
    },
    friendAvatar: {
      type: String
    },
    friendStatus: {
      type: String
    },
    messagesId: {
      type: Schema.ObjectId
    }
  }
);

export type Chat = InferSchemaType<typeof ChatSchema>;
export const Chat = model('Chat', ChatSchema);
