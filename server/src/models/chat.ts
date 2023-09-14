
import { Schema, model, type InferSchemaType } from 'mongoose';

export const ChatSchema = new Schema(
  {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    messages: {
      type: Array,
      required: true
    }
  },
);

export type Chat = InferSchemaType<typeof ChatSchema>;
export const Chat = model('Chat', ChatSchema);
