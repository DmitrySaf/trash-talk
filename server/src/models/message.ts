
import { Schema, model, type InferSchemaType } from 'mongoose';
import { type ModelWithMongoDocument } from './types'

export const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    isRead: {
      type: Boolean,
      required: true
    },
    date: { 
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
);

export type Message = ModelWithMongoDocument<typeof MessageSchema>;
export const Message = model('Message', MessageSchema);
