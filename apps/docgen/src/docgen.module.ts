import { Module } from '@nestjs/common';
import { DocgenController } from './docgen.controller';
import { DocgenService } from './docgen.service';

@Module({
  imports: [],
  controllers: [DocgenController],
  providers: [DocgenService],
})
export class DocgenModule {}
