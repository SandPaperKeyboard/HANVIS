/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop({required: true})
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const UserSchema = SchemaFactory.createForClass(User);