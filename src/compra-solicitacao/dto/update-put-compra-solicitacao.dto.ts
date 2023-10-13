import { PartialType } from '@nestjs/swagger';
import { CreateCompraSolicitacaoDto } from './create-compra-solicitacao.dto';

export class UpdatePutCompraSolicitacaoDto extends PartialType(CreateCompraSolicitacaoDto) {}
