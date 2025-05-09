import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    ProductosModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // o 'postgres', 'sqlite', etc.
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pruebas',
      autoLoadEntities: true, // Carga autom�ticamente los Entity registrados en cualquier m�dulo
    }),
    UserModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
