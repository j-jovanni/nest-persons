import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {

    @Prop()
    name: string;

    @Prop()
    birthdate: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    signature: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
