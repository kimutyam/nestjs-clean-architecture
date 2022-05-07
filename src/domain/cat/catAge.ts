import type { Newtype } from 'newtype-ts';
import { iso, prism } from 'newtype-ts';
import type { CatGeneration } from './catGeneration';
import { CAT_GENERATION } from './catGeneration';

export type CatAge = Newtype<{ readonly CAT_AGE: unique symbol }, number>;
export const CatAge = {
  iso: iso<CatAge>(),
  prism: prism<CatAge>((n) => n >= 0),
  judge: (age: CatAge): CatGeneration => {
    const raw = CatAge.iso.unwrap(age);
    if (raw >= 0 && raw <= 2) {
      return CAT_GENERATION.Junior;
    }
    if (raw > 2 && raw <= 10) {
      return CAT_GENERATION.Middle;
    }
    return CAT_GENERATION.Senior;
  },
} as const;
