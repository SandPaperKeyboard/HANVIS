import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Board {
    @Prop({required: true})
    title: string;

    @Prop()
    content: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);