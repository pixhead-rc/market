import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Store } from '@ngrx/store';
import { ProductsApiActions } from './state/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market';

  constructor(private productsService: ProductsService, private store: Store) {
    this.productsService
      .getProducts()
      .subscribe((products) => {
        this.store.dispatch(ProductsApiActions.retrievedProductList({ products }));
      });
  }
}
