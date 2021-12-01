import { OrderStatus } from "../models/enum";
import { OrderStatusPipe } from "./order-status.pipe";

describe('OverviewComponent', () => {
  let pipe: OrderStatusPipe;

  beforeEach(() => {
    pipe = new OrderStatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform()', () => {
    it.each([
        OrderStatus.Created,
        OrderStatus.PendingApproval,
        OrderStatus.PendingPayment,
        OrderStatus.SubmittedToWarehouse,
        OrderStatus.BeingPacked,
        OrderStatus.Shipped,
    ])('should transform %p to UI friendly value', (value) => {
        const result = pipe.transform(value);
        expect(result).toBe('In Process');
    });
    
    it.each([
        OrderStatus.Delivered,
    ])('should transform %p to UI friendly value', (value) => {
        const result = pipe.transform(value);
        expect(result).toBe('Complete');
    });
    
    it.each([
        OrderStatus.PaymentDeclined,
    ])('should transform %p to UI friendly value', (value) => {
      const result = pipe.transform(value);
      expect(result).toBe('Cancelled');
    });
  });
});
