import { Module } from '@nestjs/common';
import { CompraSolicitacaoService } from './compra-solicitacao.service';
import { CompraSolicitacaoController } from './compra-solicitacao.controller';

@Module({
  controllers: [CompraSolicitacaoController],
  providers: [CompraSolicitacaoService],
  imports: [],
  exports: []
})
export class CompraSolicitacaoModule {}
