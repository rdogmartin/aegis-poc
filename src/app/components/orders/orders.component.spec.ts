import { OrderService } from "src/app/services/api/order.service";
import { instance, mock } from "ts-mockito";
import { OrdersComponent } from "./orders.component";

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let orderServiceMock: OrderService;

  beforeEach(() => {
    orderServiceMock = mock(OrderService);
    component = new OrdersComponent(
      instance(orderServiceMock),
    );
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
