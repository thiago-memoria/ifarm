import { Test, TestingModule } from '@nestjs/testing';
import { CompraSolicitacaoController } from './compra-solicitacao.controller';
import { CompraSolicitacaoService } from './compra-solicitacao.service';

describe('CompraSolicitacaoController', () => {
  let controller: CompraSolicitacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompraSolicitacaoController],
      providers: [CompraSolicitacaoService],
    }).compile();

    controller = module.get<CompraSolicitacaoController>(CompraSolicitacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
