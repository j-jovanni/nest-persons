import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsObject, IsOptional, IsString } from "class-validator";

export class CreatePersonDto {
    @IsString()
    @ApiProperty({ type: String, required: false, example: 'enrique suares' })
    name: string;

    @IsString()
    @ApiProperty({ type: String, required: false })
    birthdate: String;

    @IsEmail()
    @ApiProperty({ type: String, required: false, example: 'email@gmail.com' })
    email: string;


    @IsString()
    @ApiProperty({ type: String, required: false, example: '5531234560' })
    phone: string;

    @IsString()
    @ApiProperty({  })
    signature: string;

}
