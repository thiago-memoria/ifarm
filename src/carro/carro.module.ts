import { Module } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';

@Module({
  controllers: [CarroController],
  providers: [CarroService],
  imports: [],
  exports: []
})
export class CarroModule {}
