import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact)
    private contactModel: typeof Contact,
  ) {}

  create({ userId, email }: CreateContactInput): Promise<Contact> {
    return this.contactModel.create({
      userId,
      email,
    });
  }

  findAll(): Promise<Contact[]> {
    return this.contactModel.findAll();
  }

  findOne(id: number): Promise<Contact> {
    return this.contactModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, { email, userId }: UpdateContactInput) {
    const contact = await this.findOne(id);

    const shouldUpdateEmail = email !== undefined;
    const shouldUpdateUserId = userId !== undefined;

    shouldUpdateEmail && contact.set('email', email);
    shouldUpdateUserId && contact.set('userId', userId);

    (shouldUpdateEmail || shouldUpdateUserId) && contact.save();

    return contact;
  }

  async remove(id: number): Promise<void> {
    const contact = await this.findOne(id);
    await contact.destroy();
  }
}
