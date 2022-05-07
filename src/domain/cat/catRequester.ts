import type { Cat } from './cat';
import type { CatId } from './catId';

export const CAT_REQUESTER_TOKEN = 'CAT_REQUESTER_TOKEN';

export interface ICatRequester {
  get(catId: CatId): Promise<Cat | undefined>;
}
