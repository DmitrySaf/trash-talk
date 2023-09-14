
import { Schema, model, type InferSchemaType } from 'mongoose';

export const FolderSchema = new Schema(
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

export type Folder = InferSchemaType<typeof FolderSchema>;
export const Folder = model('Folder', FolderSchema);
