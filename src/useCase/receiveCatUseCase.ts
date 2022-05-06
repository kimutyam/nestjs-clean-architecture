import type { Cat } from '../domain/cat';
import type { UseCase } from './useCase';

export type Input = Readonly<{
  catId: string;
}>;

export type Output = Cat;

export const RECEIVE_CAT_USECASE_TOKEN = 'RECEIVE_CAT_USECASE_TOKEN';

export type ReceiveCatUseCase = UseCase<Input, Output>;
