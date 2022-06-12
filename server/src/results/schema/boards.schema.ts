import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Result {
    @Prop({required: true})
    title: string;

    @Prop()
    content: string;
}

export const ResultSchema = SchemaFactory.createForClass(Result);