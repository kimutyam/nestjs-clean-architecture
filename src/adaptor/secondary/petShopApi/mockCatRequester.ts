import type { Provider } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Cat } from '../../../domain/cat/cat';
import type { CatId } from '../../../domain/cat/catId';
import type { ICatRequester } from '../../../domain/cat/catRequester';
import { CAT_REQUESTER_TOKEN } from '../../../domain/cat/catRequester';

const cats: Map<CatId, Cat> = new Map();

@Injectable()
export class MockCatRequester implements ICatRequester {
  get(catId: CatId): Promise<Cat | undefined> {
    return Promise.resolve(cats.get(catId));
  }
}

export const CatRequesterProvider: Provider = {
  provide: CAT_REQUESTER_TOKEN,
  useClass: MockCatRequester,
};
