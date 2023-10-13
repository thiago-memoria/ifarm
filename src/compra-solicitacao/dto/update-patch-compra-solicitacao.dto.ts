import { PartialType } from '@nestjs/swagger';
import { CreateCompraSolicitacaoDto } from './create-compra-solicitacao.dto';

export class UpdatePatchCompraSolicitacaoDto extends PartialType(CreateCompraSolicitacaoDto) {}
