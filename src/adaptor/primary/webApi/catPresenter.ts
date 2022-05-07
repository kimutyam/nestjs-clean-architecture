import { Injectable } from '@nestjs/common';
import { CatAge } from '../../../domain/cat/catAge';
import type { Output } from '../../../useCase/receiveCatUseCase';
import type { CatViewModel } from './catViewModel';

@Injectable()
export class CatPresenter {
  run({ name, age }: Output): CatViewModel {
    return {
      name,
      generation: CatAge.judge(age),
    };
  }
}
