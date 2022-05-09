import type { Provider } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AdaptorMemoryStoreModule } from 'adaptor/secondary/memoryStore/adaptorMemoryStoreModule';
import { AdaptorPetShopApiModule } from 'adaptor/secondary/petShopApi/adaptorPetShopApiModule';
import { ReceiveCatInteractor } from './receiveCatInteractor';
import { RECEIVE_CAT_USECASE_TOKEN } from './receiveCatUseCase';

export const ReceiveCatUseCaseProvider: Provider = {
  provide: RECEIVE_CAT_USECASE_TOKEN,
  useClass: ReceiveCatInteractor,
};

@Module({
  imports: [AdaptorMemoryStoreModule, AdaptorPetShopApiModule],
  providers: [ReceiveCatUseCaseProvider],
  exports: [ReceiveCatUseCaseProvider],
})
export class UseCaseModule {}
