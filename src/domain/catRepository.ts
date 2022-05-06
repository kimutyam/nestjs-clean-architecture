import type { Cat } from './cat';

export const CAT_REPOSITORY_TOKEN = 'CAT_REPOSITORY_TOKEN';

export interface ICatRepository {
  store(cat: Cat): Promise<void>;
}
