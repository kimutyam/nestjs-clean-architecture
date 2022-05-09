import type { Cat } from 'domain/cat/cat';
import type { CatId } from 'domain/cat/catId';
import type { UseCase } from './useCase';

export type Input = Readonly<{
  catId: CatId;
}>;

export type Output = Omit<Cat, 'id'>;

export type ReceiveCatUseCase = UseCase<Input, Output>;

export const RECEIVE_CAT_USECASE_TOKEN = 'RECEIVE_CAT_USECASE_TOKEN';
