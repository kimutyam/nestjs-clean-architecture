import type { Newtype } from 'newtype-ts';
import { iso, prism } from 'newtype-ts';

export type CatName = Newtype<{ readonly CAT_NAME: unique symbol }, string>;
export const CatName = {
  iso: iso<CatName>(),
  prism: prism<CatName>((s) => {
    return s.length > 0;
  }),
} as const;
