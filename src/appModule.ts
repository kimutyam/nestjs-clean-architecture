import { Module } from '@nestjs/common';
import { AdaptorWebApiModule } from './adaptor/primary/webApi/adaptorWebApiModule';
import { UseCaseModule } from './useCase/useCaseModule';

@Module({
  imports: [UseCaseModule, AdaptorWebApiModule],
})
export class AppModule {}
