import {
  Resolver, Query, Mutation, Arg
} from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entities/User.entity';
import { RegisterInput } from './register/RegisterInput';

@Resolver()
export class RegisterResolver {
  @Query(() => String, {
    name: 'HelloWorldTS', nullable: true
  })
  async hello() {
    return 'Hello World'
  }

  @Mutation(() => User)
  async register(
    @Arg('data'){
      email, firstName, lastName, password
    }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();

    return user;
  }
}