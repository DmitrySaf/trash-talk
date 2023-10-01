
import { Schema, model } from 'mongoose';
import { type ModelWithMongoDocument } from './types'

export const ChatSchema = new Schema(
  {
    friendId: {
      type: Schema.ObjectId,
      required: true
    },
    messagesIds: {
      type: [Schema.ObjectId],
      default: []
    }
  }
);

export type Chat = ModelWithMongoDocument<typeof ChatSchema>;
export const Chat = model('Chat', ChatSchema);
