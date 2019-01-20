import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: 'default',
    type: 'postgres',
    host: 'manny.db.elephantsql.com',
    port: 5432,
    username: 'cbeljbpt',
    password: 'YzeAMfT9n5f3mIfLf-q4lrC_hGK2K0S4',
    database: 'cbeljbpt',
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + '/../../src/entities/*.entity.*']
  });
};
