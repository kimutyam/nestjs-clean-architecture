import { Age } from './age';
import type { CatGeneration } from './catGeneration';
import type { CatId } from './catId';

export type Cat = Readonly<{
  id: CatId;
  name: string;
  age: Age;
}>;

export const Cat = {
  generation: (cat: Cat): CatGeneration => {
    return Age.judge(cat.age);
  },
} as const;
