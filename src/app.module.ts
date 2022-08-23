import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'notifications_service_server',
      models: [User],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
