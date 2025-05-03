import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService){}

    @Get()
    findAll(){
        return this.productosService.finAll();
    }

    @Post()
    create(@Body() body: {name: string,category:string,quantity:number}){
        return this.productosService.create(body);
    }
}
