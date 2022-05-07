import type { Newtype } from 'newtype-ts';
import { iso, prism } from 'newtype-ts';
import type { CatGeneration } from './catGeneration';
import { CAT_GENERATION } from './catGeneration';

export type Age = Newtype<{ readonly CAT_ID: unique symbol }, number>;
export const Age = {
  iso: iso<Age>(),
  prism: prism<Age>((n) => n >= 0),
  judge: (age: Age): CatGeneration => {
    const raw = Age.iso.unwrap(age);
    if (raw >= 0 && raw <= 2) {
      return CAT_GENERATION.Junior;
    }
    if (raw > 2 && raw <= 10) {
      return CAT_GENERATION.Middle;
    }
    return CAT_GENERATION.Senior;
  },
} as const;
