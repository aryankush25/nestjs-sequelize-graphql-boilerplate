import { CreateNotificationAudienceInput } from './create-notification_audience.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNotificationAudienceInput extends PartialType(
  CreateNotificationAudienceInput,
) {
  id: number;
}
