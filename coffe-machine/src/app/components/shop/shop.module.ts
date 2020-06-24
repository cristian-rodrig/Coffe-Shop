import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CoffeeCardComponent } from './coffee-card/coffee-card.component';
import { ShopComponent } from './shop.component';


@NgModule({
  declarations: [
    CoffeeCardComponent, 
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
