import { Module } from '@nestjs/common';
import { MercadoriaService } from './mercadoria.service';
import { MercadoriaController } from './mercadoria.controller';

@Module({
  controllers: [MercadoriaController],
  providers: [MercadoriaService],
  imports: [],
  exports: []
})
export class MercadoriaModule {}
