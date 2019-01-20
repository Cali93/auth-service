import { Connection } from 'typeorm';

import { testConn } from '../../../utils/testConn';
import { gCall } from '../../../utils/gCall';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(
    data: $data
  ) {
    id
    firstName
    lastName
    email
    name
  }
}
`;

describe('Register', () => {
  it('create user', async () => {
    const registerUser = await gCall({
      source: registerMutation,
      variableValues: {
        data: {
          email: 'test@testos.com',
          firstName: 'calouz',
          lastName: 'lalouz',
          password: 'calouzlalouz88'
        }
      }
    })
    console.log(registerUser);
  });
});
