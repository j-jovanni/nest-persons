import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel('Persons') private readonly personModel: Model<Person>,
  ) { }

  async create(createPersonDto: CreatePersonDto) {
    try {
      const responseSave = await this.personModel.create(createPersonDto);
      return responseSave;
    } catch (error) {
      throw new BadRequestException(error.toString());

    }

  }

  async findAll() {
    return await this.personModel.find();
  }

  async findOne(id: string) {
    return await this.personModel.findById(id);
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    try {
      console.log(updatePersonDto);
      const responseUpdate = await this.personModel.findOneAndUpdate({ "_id": id }, updatePersonDto);
      if (!responseUpdate) throw new BadRequestException("No record found");
      return await this.personModel.findById(id);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.toString());
    }

  }

  async remove(id: string) {
    try {
      const responseUpdate = await this.personModel.findByIdAndDelete(id);
      if (!responseUpdate) throw new BadRequestException("No record found");
      return responseUpdate;
    } catch (error) {

    }

  }
}
