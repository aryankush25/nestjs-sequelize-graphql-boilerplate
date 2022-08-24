import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contact } from './contact.model';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  imports: [SequelizeModule.forFeature([Contact])],
  providers: [ContactService],
  controllers: [ContactController],
  exports: [SequelizeModule],
})
export class ContactModule {}
