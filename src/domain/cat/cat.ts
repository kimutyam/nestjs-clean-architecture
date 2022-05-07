import { CatAge } from './catAge';
import type { CatGeneration } from './catGeneration';
import type { CatId } from './catId';

export type Cat = Readonly<{
  id: CatId;
  name: string;
  age: CatAge;
}>;

export const Cat = {
  generation: (cat: Cat): CatGeneration => {
    return CatAge.judge(cat.age);
  },
} as const;
