import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateContactDto } from './contact.dto';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact)
    private contactModel: typeof Contact,
  ) {}

  async create({ userId, email }: CreateContactDto): Promise<Contact> {
    return this.contactModel.create({
      user_id: userId,
      email,
    });
  }

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
