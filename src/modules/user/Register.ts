import {
  Resolver, Query, Mutation, Arg, UseMiddleware
} from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entities/User.entity';
import { RegisterInput } from './register/RegisterInput';
import { isAuth } from '../../middlewares/isAuth';
import { logger } from '../../middlewares/logger';
import { sendEmail } from '../../utils/sendEmail';
import { createConfirmationEmail } from '../../utils/createConfirmationUrl';

@Resolver()
export class RegisterResolver {
  @UseMiddleware(isAuth, logger)
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
  ): Promise <User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();
    await sendEmail(email, await createConfirmationEmail(user.id));

    return user;
  }
}
