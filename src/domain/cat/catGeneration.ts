export const CAT_GENERATION = {
  Junior: 'Junior',
  Middle: 'Middle',
  Senior: 'senior',
} as const;

export type CatGeneration = typeof CAT_GENERATION[keyof typeof CAT_GENERATION];
