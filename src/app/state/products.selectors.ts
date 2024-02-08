import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from './product.model';

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectProductById = (id: number) => createSelector(
    selectProducts,
    products => products[id]
);
