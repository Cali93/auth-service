import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../types/MyContext';
export const isOwner: MiddlewareFn <MyContext> = async ({ args, context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error('Not owner');
  }

  if (args.userId === context.req.session!.userId) {
  }

  return next();
};
