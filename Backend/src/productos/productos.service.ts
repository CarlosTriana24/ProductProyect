import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private productos = [
        {id: 1, name: 'Laptop', category: 'Tecnologia', quantity: 1},
        {id: 2, name: 'Teclado', category: 'Tecnologia', quantity: 1}
    ];

    finAll(){
        return this.productos;
    }

    create(producto: {name:string, category:string, quantity:number}){
        const nuevo = {id: Date.now(), ...producto};
        this.productos.push(nuevo);
        return nuevo;
    }
}
