
import { Schema, model, type InferSchemaType } from 'mongoose';

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
