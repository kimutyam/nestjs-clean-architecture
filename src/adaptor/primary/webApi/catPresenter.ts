import { Injectable } from '@nestjs/common';
import { Age } from '../../../domain/cat/age';
import type { Output } from '../../../useCase/receiveCatUseCase';
import type { CatViewModel } from './catViewModel';

@Injectable()
export class CatPresenter {
  run({ name, age }: Output): CatViewModel {
    return {
      name,
      generation: Age.judge(age),
    };
  }
}
