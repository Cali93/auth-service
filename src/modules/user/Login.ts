import {
  Resolver,  Mutation, Arg, Ctx
} from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entities/User.entity';
import { LoginInput } from './login/LoginInput';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class LoginResolver {

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('data'){
      email, password
    }: LoginInput,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email }});

    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return null;

    if (!user.confirmed) return null;

    ctx.req.session!.userId = user.id;

    return user;
  }
}
