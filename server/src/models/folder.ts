
import { Schema, model } from 'mongoose';
import { type ModelWithMongoDocument } from './types'

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

export type Folder = ModelWithMongoDocument<typeof FolderSchema>;
export const Folder = model('Folder', FolderSchema);
