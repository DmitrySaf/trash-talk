import { Schema, model } from 'mongoose';
import { type ModelWithMongoDocument } from './types'

export const BoardSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    chats: {
      type: Array,
      required: true
    }
  },
);

export type Board = ModelWithMongoDocument<typeof BoardSchema>;
export const Board = model('Board', BoardSchema);
