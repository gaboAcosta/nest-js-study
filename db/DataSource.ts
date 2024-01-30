import { DataSource } from 'typeorm';

const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'localPass123',
  database: 'testApp',
  migrations: ['db/migrations/*.ts'],
});

export default MysqlDataSource;
