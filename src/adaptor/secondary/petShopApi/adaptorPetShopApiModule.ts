import { Module } from '@nestjs/common';
import { CatRequesterProvider } from './mockCatRequester';

@Module({
  providers: [CatRequesterProvider],
  exports: [CatRequesterProvider],
})
export class AdaptorPetShopApiModule {}
