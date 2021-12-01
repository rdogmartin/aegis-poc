import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderStatus } from 'src/app/shared/models/enum';
import { Order } from 'src/app/shared/models/model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
  ) { }

  public getOrders(): Observable<Order[]> {
    const orders = [
        {
            id: '111',
            status: OrderStatus.PendingApproval,
            amount: 10.15,
        },
        {
            id: '222',
            status: OrderStatus.Delivered,
            amount: 22.88,
        }
    ]
    return of(orders);
  }
}
