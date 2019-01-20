import { Field, InputType } from "type-graphql";
import { IsEmail } from "class-validator";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";
import { PasswordInput } from "../../../shared/PasswordInput";

@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({
    message: 'This email already exists.'
  })
  email: string;
}
