import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CarroModule } from './carro/carro.module';
import { MercadoriaModule } from './mercadoria/mercadoria.module';
import { CompraSolicitacaoModule } from './compra-solicitacao/compra-solicitacao.module';
import { Compra2Module } from './compra2/compra2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/entities/usuario.entity';

@Module({
  imports: [UsuarioModule, CarroModule, MercadoriaModule, CompraSolicitacaoModule, Compra2Module,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UsuarioEntity],
      synchronize: process.env.ENV === "development"
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
