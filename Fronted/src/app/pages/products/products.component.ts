import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductoServicesService } from '../../core/services/producto-services.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

export interface Product{
  id: string,
  name: string,
  category: string,
  quantity: number
}

@Component({
  selector: 'app-products',
  imports: [TableModule, ButtonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductoServicesService);
  products: Product[] = [];

  ngOnInit(){
    this.productService.getAllProduct().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products)
      },
      error: (err) => {
        console.error(`Ha sucedido un error ${err.message}`);
      }
    })
  }

}
