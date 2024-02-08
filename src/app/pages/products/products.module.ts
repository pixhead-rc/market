import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';
import { CoreModule } from 'src/app/core/core.module';
import { ProductModule } from '../product/product.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    CoreModule,
    FormsModule,
    ProductModule,
    ProductsRoutes,
    RouterModule,
  ],
  declarations: [
    ProductsComponent,
  ]
})
export class ProductsModule { }
