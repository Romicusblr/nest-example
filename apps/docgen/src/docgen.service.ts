import { Injectable } from '@nestjs/common';

@Injectable()
export class DocgenService {
  getHello(): string {
    return 'Hello World!';
  }
}
