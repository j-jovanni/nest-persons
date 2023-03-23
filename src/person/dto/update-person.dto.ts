import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';
import { IsDate, IsEmail, IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
    @IsString()
    @IsOptional()
    @ApiProperty({ type: String, required: false, example: 'enrique suares' })
    name: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ type: String, required: false, example: '10/11/2200' })
    birthdate: string;

    @IsEmail()
    @IsOptional()
    @ApiProperty({ type: String, required: false, example: 'email@gmail.com' })
    email: string;


    @IsString()
    @IsOptional()
    @ApiProperty({ type: String, required: false, example: '5531234560' })
    phone: string;

    @IsString()
    @IsOptional()
    @ApiProperty({  })
    signature: string;
}
