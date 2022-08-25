import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contact } from './entities/contact.entity';
import { ContactsService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Contact])],
  providers: [ContactsResolver, ContactsService],
  exports: [SequelizeModule],
})
export class ContactsModule {}
