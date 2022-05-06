import { Module } from '@nestjs/common';
import { UseCaseModule } from '../../../useCase/useCaseModule';
import { CatsController } from './catsController';

@Module({
  imports: [UseCaseModule],
  controllers: [CatsController],
})
export class AdaptorWebApiModule {}
