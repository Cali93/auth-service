import { Resolver, Query, Ctx } from 'type-graphql';
import { User } from '../../entities/User.entity';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class MeResolver {

  @Query(() => User, {
    name: 'Me', nullable: true
  })

  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {

    if (!ctx.req.session!.userId) return undefined;

    return User.findOne(ctx.req.session!.userId);

  }

}
