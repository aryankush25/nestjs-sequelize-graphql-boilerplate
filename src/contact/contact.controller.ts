import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateContactDto } from './contact.dto';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  getAllContacts(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Post()
  addContact(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactService.create(createContactDto);
  }
}
