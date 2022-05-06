import type { Provider } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Cat } from '../../../domain/cat';
import type { ICatRepository } from '../../../domain/catRepository';
import { CAT_REPOSITORY_TOKEN } from '../../../domain/catRepository';

const cats: Map<string, Cat> = new Map();

@Injectable()
export class CatRepository implements ICatRepository {
  store(cat: Cat): Promise<void> {
    cats.set(cat.id, cat);
    return Promise.resolve();
  }
}

export const CatRepositoryProvider: Provider = {
  provide: CAT_REPOSITORY_TOKEN,
  useClass: CatRepository,
};
