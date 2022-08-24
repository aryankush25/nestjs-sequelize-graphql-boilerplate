import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { Contact } from './contact/contact.model';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_DIALECT: Joi.string(),
        DATABASE_HOST: Joi.string(),
        DATABASE_PORT: Joi.number().default(5432),
        DATABASE_USER: Joi.string(),
        DATABASE_PASSWORD: Joi.string(),
        DATABASE_NAME: Joi.string(),

        PORT: Joi.number().default(8080),

        ENV: Joi.string()
          .valid('development', 'base', 'beta', 'qa', 'qa2')
          .default('development'),
      }),
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DATABASE_DIALECT as Dialect,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [Contact],
    }),
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
