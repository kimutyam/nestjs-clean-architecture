import type { Newtype } from 'newtype-ts';
import { iso, prism } from 'newtype-ts';

export type CatId = Newtype<{ readonly CAT_ID: unique symbol }, string>;
export const CatId = {
  iso: iso<CatId>(),
  prism: prism<CatId>((s) => {
    return s.length > 0;
  }),
} as const;
