import { Field, InputType } from "type-graphql";
// import { Length } from "class-validator";

@InputType()
export class PasswordInput {

  @Field()
  password: string;
}
