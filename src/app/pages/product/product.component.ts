import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/services/products.service';
import { selectProductById, selectProducts } from 'src/app/state/products.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() set id(productId: string) {
    this.getProduct(productId);
  }

  product!: string;

  constructor(private productsService: ProductsService, private store: Store) { }

  ngOnInit() {
  }

  public getProduct(productId: string) {
    this.store.select(selectProductById(+productId)).subscribe((product) => product ? this.product = JSON.stringify(product) : this.fetchProductRaw(productId));
  }

  public fetchProductRaw(productId: string) {
    this.productsService.getProductRaw(productId).subscribe((product) => this.product = JSON.stringify(product));
  }

}
