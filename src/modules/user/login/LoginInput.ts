import { Field, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";

@InputType()
export class LoginInput {

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(8, 60)
  password: string;
}
