import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Compra2Service } from './compra2.service';
import { CreateCompra2Dto } from './dto/create-compra2.dto';
import { UpdateCompra2Dto } from './dto/update-compra2.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('compra')
@Controller('compra2')
export class Compra2Controller {
  constructor(private readonly compra2Service: Compra2Service) {}

  @Post()
  create(@Body() createCompra2Dto: CreateCompra2Dto) {
    return this.compra2Service.create(createCompra2Dto);
  }

  @Get()
  findAll() {
    return this.compra2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compra2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompra2Dto: UpdateCompra2Dto) {
    return this.compra2Service.update(+id, updateCompra2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compra2Service.remove(+id);
  }
}
