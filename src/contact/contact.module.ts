import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contact } from './contact.model';
import { UserController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  imports: [SequelizeModule.forFeature([Contact])],
  providers: [ContactService],
  controllers: [UserController],
  exports: [SequelizeModule],
})
export class ContactModule {}
