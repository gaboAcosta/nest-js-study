import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'localPass123',
      database: 'testApp',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
