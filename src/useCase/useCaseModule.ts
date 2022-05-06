import { Module } from '@nestjs/common';
import { AdaptorMemoryStoreModule } from '../adaptor/secondary/memoryStore/adaptorMemoryStoreModule';
import { AdaptorPetShopApiModule } from '../adaptor/secondary/petShopApi/adaptorPetShopApiModule';
import { ReceiveCatUseCaseProvider } from './receiveCatInteractor';

@Module({
  imports: [AdaptorMemoryStoreModule, AdaptorPetShopApiModule],
  providers: [ReceiveCatUseCaseProvider],
  exports: [ReceiveCatUseCaseProvider],
})
export class UseCaseModule {}
