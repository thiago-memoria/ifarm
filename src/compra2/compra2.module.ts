import { Module } from '@nestjs/common';
import { Compra2Service } from './compra2.service';
import { Compra2Controller } from './compra2.controller';

@Module({
  controllers: [Compra2Controller],
  providers: [Compra2Service],
})
export class Compra2Module {}
