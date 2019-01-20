import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../types/MyContext';
export const logger: MiddlewareFn <MyContext> = async ({ args, context }, next) => {

  if (context.req.session!.userId) {
    console.log({args});
  }

  return next();
};
