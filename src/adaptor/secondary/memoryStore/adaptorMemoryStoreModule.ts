import { Module } from '@nestjs/common';
import { CatRepositoryProvider } from './catRepository';

@Module({
  providers: [CatRepositoryProvider],
  exports: [CatRepositoryProvider],
})
export class AdaptorMemoryStoreModule {}
