import { Controller, Get } from '@nestjs/common';
import { DocgenService } from './docgen.service';

@Controller()
export class DocgenController {
  constructor(private readonly docgenService: DocgenService) {}

  @Get()
  getHello(): string {
    return this.docgenService.getHello();
  }
}
