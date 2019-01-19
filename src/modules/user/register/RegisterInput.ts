import { Field, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255, {
    message: 'test message'
  })
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({
    message: 'This email already exists.'
  })
  email: string;

  @Field()
  @Length(8, 60, {
    message: 'test message'
  })
  password: string;
}
