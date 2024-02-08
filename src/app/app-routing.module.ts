import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';

const routes: Routes = [
  { 
    path: 'products',
    loadChildren: () => import('$products/products.module').then((module) => module.ProductsModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule { }
