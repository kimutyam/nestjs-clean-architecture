import { BadRequestException, Controller, Inject, Param, Put } from '@nestjs/common';
import * as O from 'fp-ts/Option';
import { CatId } from '../../../domain/cat/catId';
import { RECEIVE_CAT_USECASE_TOKEN, ReceiveCatUseCase } from '../../../useCase/receiveCatUseCase';
import { CatPresenter } from './catPresenter';
import type { CatViewModel } from './catViewModel';

@Controller('/cat')
export class CatController {
  constructor(
    @Inject(RECEIVE_CAT_USECASE_TOKEN)
    private keepCatUseCase: ReceiveCatUseCase,
    private catPresenter: CatPresenter,
  ) {}

  @Put(':id')
  async receive(@Param('id') id: string): Promise<CatViewModel> {
    const catId = CatId.prism.getOption(id);
    if (O.isNone(catId)) {
      throw new BadRequestException('IDの長さが不正です');
    }
    const cat = await this.keepCatUseCase.run({ catId: catId.value });
    return this.catPresenter.run(cat);
  }
}
