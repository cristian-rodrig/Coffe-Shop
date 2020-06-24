import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';

import { ShopModule } from '../components/shop/shop.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    LayoutComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShopModule,
    SweetAlert2Module.forRoot()
  ]
})
export class LayoutModule { }
