import { Document } from 'mongoose';
export interface IResult extends Document {
    readonly title: string;
    readonly content: string;
}
