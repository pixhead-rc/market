import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':id', component: ProductComponent },
];

export const ProductsRoutes = RouterModule.forChild(routes);
