import { Test, TestingModule } from '@nestjs/testing';
import { DocgenController } from './docgen.controller';
import { DocgenService } from './docgen.service';

describe('DocgenController', () => {
  let docgenController: DocgenController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocgenController],
      providers: [DocgenService],
    }).compile();

    docgenController = app.get<DocgenController>(DocgenController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(docgenController.getHello()).toBe('Hello World!');
    });
  });
});
