import type { Cat } from './cat';

export const CAT_REQUESTER_TOKEN = 'CAT_REQUESTER_TOKEN';

export interface ICatRequester {
  get(catId: string): Promise<Cat | undefined>;
}
