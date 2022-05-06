import { Controller, Put, Inject, Param } from '@nestjs/common';
import type { Cat } from '../../../domain/cat';
import { RECEIVE_CAT_USECASE_TOKEN, ReceiveCatUseCase } from '../../../useCase/receiveCatUseCase';

@Controller('/cat')
export class CatsController {
  constructor(
    @Inject(RECEIVE_CAT_USECASE_TOKEN)
    private keepCatUseCase: ReceiveCatUseCase,
  ) {}

  @Put(':id')
  receive(@Param('id') catId: string): Promise<Cat> {
    return this.keepCatUseCase.run({ catId });
  }
}
