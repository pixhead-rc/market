import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    ProductComponent
  ],
})
export class ProductModule { }
