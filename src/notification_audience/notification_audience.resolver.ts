import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationAudienceService } from './notification_audience.service';
import { CreateNotificationAudienceInput } from './dto/create-notification_audience.input';
import { UpdateNotificationAudienceInput } from './dto/update-notification_audience.input';

@Resolver('NotificationAudience')
export class NotificationAudienceResolver {
  constructor(
    private readonly notificationAudienceService: NotificationAudienceService,
  ) {}

  @Mutation('createNotificationAudience')
  create(
    @Args('createNotificationAudienceInput')
    createNotificationAudienceInput: CreateNotificationAudienceInput,
  ) {
    return this.notificationAudienceService.create(
      createNotificationAudienceInput,
    );
  }

  @Query('notificationAudience')
  findAll() {
    return this.notificationAudienceService.findAll();
  }

  @Query('notificationAudience')
  findOne(@Args('id') id: number) {
    return this.notificationAudienceService.findOne(id);
  }

  @Mutation('updateNotificationAudience')
  update(
    @Args('updateNotificationAudienceInput')
    updateNotificationAudienceInput: UpdateNotificationAudienceInput,
  ) {
    return this.notificationAudienceService.update(
      updateNotificationAudienceInput.id,
      updateNotificationAudienceInput,
    );
  }

  @Mutation('removeNotificationAudience')
  remove(@Args('id') id: number) {
    return this.notificationAudienceService.remove(id);
  }
}
