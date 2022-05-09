import { Inject, Injectable } from '@nestjs/common';
import { CAT_REPOSITORY_TOKEN, ICatRepository } from 'domain/cat/catRepository';
import { CAT_REQUESTER_TOKEN, ICatRequester } from 'domain/cat/catRequester';
import type { Input, ReceiveCatUseCase, Output } from './receiveCatUseCase';

@Injectable()
export class ReceiveCatInteractor implements ReceiveCatUseCase {
  constructor(
    @Inject(CAT_REPOSITORY_TOKEN)
    private catRepository: ICatRepository,
    @Inject(CAT_REQUESTER_TOKEN)
    private catRequester: ICatRequester,
  ) {}

  async run({ catId }: Input): Promise<Output> {
    const cat = await this.catRequester.get(catId);
    if (cat === undefined) {
      throw new Error('現在取り扱っていない猫です');
    }
    await this.catRepository.store(cat);
    return cat;
  }
}
