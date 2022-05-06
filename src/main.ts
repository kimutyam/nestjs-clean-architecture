import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';

export async function main() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  await app.listen(80, '0.0.0.0');
}

main();
