import type { Provider } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { CAT_REQUESTER_TOKEN } from '../../../domain/cat/catRequester';
import { MockCatRequester } from './mockCatRequester';

export const CatRequesterProvider: Provider = {
  provide: CAT_REQUESTER_TOKEN,
  useClass: MockCatRequester,
};

@Module({
  providers: [CatRequesterProvider],
  exports: [CatRequesterProvider],
})
export class AdaptorPetShopApiModule {}
