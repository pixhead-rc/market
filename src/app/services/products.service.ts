import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../state/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(searchString?: string): Observable<Array<Product>> {
    return this.http
      .get<{products: Product[]}>(
        'https://dummyjson.com/products' + (searchString ? '/search?q=' + searchString : '')
      )
      .pipe(map((products) => products.products || []));
  }

  getProductRaw(id: string): Observable<Product> {
    return this.http.get<Product>('https://dummyjson.com/products/' + id);
  }
}
