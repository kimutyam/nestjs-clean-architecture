import { Injectable } from '@nestjs/common';
import type { Cat } from '../../../domain/cat/cat';
import type { CatId } from '../../../domain/cat/catId';
import type { ICatRepository } from '../../../domain/cat/catRepository';

const cats: Map<CatId, Cat> = new Map();

@Injectable()
export class CatRepository implements ICatRepository {
  store(cat: Cat): Promise<void> {
    cats.set(cat.id, cat);
    return Promise.resolve();
  }
}
