import { Document } from 'mongoose';

export interface IBoard extends Document {
    readonly title: string;
    readonly content: string;
}
