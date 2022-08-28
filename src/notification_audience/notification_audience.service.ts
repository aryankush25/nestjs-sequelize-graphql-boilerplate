import { Injectable } from '@nestjs/common';
import { CreateNotificationAudienceInput } from './dto/create-notification_audience.input';
import { UpdateNotificationAudienceInput } from './dto/update-notification_audience.input';

@Injectable()
export class NotificationAudienceService {
  create(createNotificationAudienceInput: CreateNotificationAudienceInput) {
    return 'This action adds a new notificationAudience';
  }

  findAll() {
    return `This action returns all notificationAudience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificationAudience`;
  }

  update(
    id: number,
    updateNotificationAudienceInput: UpdateNotificationAudienceInput,
  ) {
    return `This action updates a #${id} notificationAudience`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationAudience`;
  }
}
