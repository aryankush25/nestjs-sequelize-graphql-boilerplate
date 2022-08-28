import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotificationAudienceService } from './notification_audience.service';
import { NotificationAudienceResolver } from './notification_audience.resolver';
import { NotificationAudience } from './entities/notification_audience.entity';

@Module({
  imports: [SequelizeModule.forFeature([NotificationAudience])],
  providers: [NotificationAudienceResolver, NotificationAudienceService],
  exports: [SequelizeModule],
})
export class NotificationAudienceModule {}
