import { type Document, type InferSchemaType } from 'mongoose';

export type ModelWithMongoDocument<T> = InferSchemaType<T> & Document
