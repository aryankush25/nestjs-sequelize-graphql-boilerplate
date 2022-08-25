import * as Joi from 'joi';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Contact } from './contacts/entities/contact.entity';
import { ContactsModule } from './contacts/contacts.module';
import { AppController } from './app.controller';

// To generate new modules check out following doc
// https://docs.nestjs.com/recipes/crud-generator

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: process.env.ENV !== 'base',
      playground: process.env.ENV !== 'base',
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      include: [],
    }),
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
