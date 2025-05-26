import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Product } from '../products.component';
import { ProductoServicesService } from '../../../core/services/producto-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-input-fields',
  imports: [ButtonModule, FormsModule],
  templateUrl: './products-input-fields.component.html',
  styleUrl: './products-input-fields.component.css'
})
export class ProductsInputFieldsComponent {
  productEnviar: Product = {} as Product;
  productService = inject(ProductoServicesService);
  router = inject(Router);

  createProduct(){
    this.productService.createProduct(this.productEnviar).subscribe({
      next:(res) => {
        console.log("Creado correctamente");
        this.router.navigate(['/home'])
      },
      error:(err) => {
        console.error(`Ha ocurrido un error ${err}`);
      }
    })
  }

}
