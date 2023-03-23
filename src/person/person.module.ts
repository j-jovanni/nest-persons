import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from 'src/schemas/person.schema';

@Module({
  imports: [
    MongooseModule.forFeature([ {
      name: 'Persons',
      schema: PersonSchema,
    }]),
  ],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
