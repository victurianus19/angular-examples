import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';

export const routesProduct: Routes = [
  { path: '', redirectTo: 'view-product', pathMatch: 'full' },
  { path: 'view-product', component: ViewProductComponent },
  { path: ':id', component: ViewProductDetailComponent }
];

@NgModule({
  declarations: [
    ViewProductComponent,
    ViewProductDetailComponent
  ],
  exports: [
    ViewProductComponent,
    ViewProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
