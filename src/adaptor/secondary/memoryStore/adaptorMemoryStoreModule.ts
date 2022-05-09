import type { Provider } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { CAT_REPOSITORY_TOKEN } from '../../../domain/cat/catRepository';
import { CatRepository } from './catRepository';

export const CatRepositoryProvider: Provider = {
  provide: CAT_REPOSITORY_TOKEN,
  useClass: CatRepository,
};

@Module({
  providers: [CatRepositoryProvider],
  exports: [CatRepositoryProvider],
})
export class AdaptorMemoryStoreModule {}
