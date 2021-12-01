import { OrderStatus } from "./enum";

export interface CurrentUser {
    userName: string;
  }  

export interface Order {
    id: string;
    status: OrderStatus;
    amount: number;
}