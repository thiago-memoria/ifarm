import { Test, TestingModule } from '@nestjs/testing';
import { CompraSolicitacaoService } from './compra-solicitacao.service';

describe('CompraSolicitacaoService', () => {
  let service: CompraSolicitacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompraSolicitacaoService],
    }).compile();

    service = module.get<CompraSolicitacaoService>(CompraSolicitacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
