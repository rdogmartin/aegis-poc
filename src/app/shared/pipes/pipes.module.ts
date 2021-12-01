import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderStatusPipe } from './order-status.pipe';

@NgModule({
  declarations: [
    OrderStatusPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderStatusPipe,
  ]
})
export class PipesModule { }
