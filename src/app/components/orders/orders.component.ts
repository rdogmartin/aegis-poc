import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/api/order.service';
import { Order } from 'src/app/shared/models/model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  public orders$: Observable<Order[]>;

  constructor(
    private orderService: OrderService,
  ) {
      this.orders$ = this.orderService.getOrders();
   }
}
