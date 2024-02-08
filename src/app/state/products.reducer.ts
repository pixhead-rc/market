import { createReducer, on } from '@ngrx/store';
import { Product } from './product.model';
import { ProductsApiActions } from './products.actions';


export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(ProductsApiActions.retrievedProductList, (_state, { products }) => products)
);
