import { Module } from '@nestjs/common';
import { UseCaseModule } from '../../../useCase/useCaseModule';
import { CatPresenter } from './catPresenter';
import { CatController } from './catController';

@Module({
  imports: [UseCaseModule],
  controllers: [CatController],
  providers: [CatPresenter],
})
export class AdaptorWebApiModule {}
