import { Schema, model, type InferSchemaType } from 'mongoose';

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

export type Board = InferSchemaType<typeof BoardSchema>;
export const Board = model('Board', BoardSchema);
