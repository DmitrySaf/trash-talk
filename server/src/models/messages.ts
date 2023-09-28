
import { Schema, model, type InferSchemaType } from 'mongoose';

export const MessagesSchema = new Schema(
  {
    messages: {
      type: Array,
      required: true
    }
  }
);

export type Messages = InferSchemaType<typeof MessagesSchema>;
export const Messages = model('Messages', MessagesSchema);
