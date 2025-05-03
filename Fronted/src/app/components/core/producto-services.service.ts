import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Product } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {

  http = inject(HttpClient);
  url = environment.apiURL;

  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  createProduct(product: Product):Observable<any>{
    return this.http.post(this.url, product);
  }

}
