import { NestFactory } from '@nestjs/core';
import { DocgenModule } from './docgen.module';

async function bootstrap() {
  const app = await NestFactory.create(DocgenModule);
  await app.listen(3000);
}
bootstrap();
