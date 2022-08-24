import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact)
    private contactModel: typeof Contact,
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactModel.findAll();
  }

  findOne(id: string): Promise<Contact> {
    return this.contactModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const contact = await this.findOne(id);
    await contact.destroy();
  }
}
