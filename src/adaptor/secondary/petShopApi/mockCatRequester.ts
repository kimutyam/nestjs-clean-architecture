import type { Provider } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Cat } from '../../../domain/cat';
import type { ICatRequester } from '../../../domain/catRequester';
import { CAT_REQUESTER_TOKEN } from '../../../domain/catRequester';

const cats: Map<string, Cat> = new Map();

@Injectable()
export class MockCatRequester implements ICatRequester {
  get(catId: string): Promise<Cat | undefined> {
    return Promise.resolve(cats.get(catId));
  }
}

export const CatRequesterProvider: Provider = {
  provide: CAT_REQUESTER_TOKEN,
  useClass: MockCatRequester,
};
