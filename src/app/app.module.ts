import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { productsReducer } from './state/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({products: productsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
