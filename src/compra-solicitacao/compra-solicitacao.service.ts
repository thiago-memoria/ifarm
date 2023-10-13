import { Injectable } from '@nestjs/common';
import { CreateCompraSolicitacaoDto } from './dto/create-compra-solicitacao.dto';
import { UpdateCompraSolicitacaoDto } from './dto/update-put-compra-solicitacao.dto';

@Injectable()
export class CompraSolicitacaoService {
  create(createCompraSolicitacaoDto: CreateCompraSolicitacaoDto) {
    return 'This action adds a new compraSolicitacao';
  }

  findAll() {
    return `This action returns all compraSolicitacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compraSolicitacao`;
  }

  update(id: number, updateCompraSolicitacaoDto: UpdateCompraSolicitacaoDto) {
    return `This action updates a #${id} compraSolicitacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} compraSolicitacao`;
  }
}
