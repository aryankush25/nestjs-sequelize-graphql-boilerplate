import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthCheckMsg(): string {
    return 'Hey hii!! Checkout our awesome product at fifo.im';
  }
}
