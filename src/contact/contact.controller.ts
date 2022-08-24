import { Controller, Get } from '@nestjs/common';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  getHello(): Promise<Contact[]> {
    return this.contactService.findAll();
  }
}
