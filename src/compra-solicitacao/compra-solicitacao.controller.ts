import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompraSolicitacaoService } from './compra-solicitacao.service';
import { CreateCompraSolicitacaoDto } from './dto/create-compra-solicitacao.dto';
import { UpdateCompraSolicitacaoDto } from './dto/update-put-compra-solicitacao.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('compraSolicitacao')
@Controller('compra-solicitacao')
export class CompraSolicitacaoController {
  constructor(private readonly compraSolicitacaoService: CompraSolicitacaoService) {}

  @Post()
  create(@Body() createCompraSolicitacaoDto: CreateCompraSolicitacaoDto) {
    return this.compraSolicitacaoService.create(createCompraSolicitacaoDto);
  }

  @Get()
  findAll() {
    return this.compraSolicitacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraSolicitacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraSolicitacaoDto: UpdateCompraSolicitacaoDto) {
    return this.compraSolicitacaoService.update(+id, updateCompraSolicitacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraSolicitacaoService.remove(+id);
  }
}
