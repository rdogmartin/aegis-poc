import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../models/enum';

@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {
  public transform(value: OrderStatus): string {
    switch (value) {
      case OrderStatus.Created:
      case OrderStatus.PendingApproval:
      case OrderStatus.PendingPayment:
      case OrderStatus.SubmittedToWarehouse:
      case OrderStatus.BeingPacked:
      case OrderStatus.Shipped:
        return 'In Process';
      case OrderStatus.Delivered:
        return 'Complete';
      case OrderStatus.PaymentDeclined:
        return 'Cancelled';
    }
  }
}
