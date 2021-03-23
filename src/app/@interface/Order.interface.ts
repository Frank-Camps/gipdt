import { Client, MOCK_CLIENT } from "./Client.interface";
import { MOCK_ORDERTYPE, OrderType } from "./OrderType.interface";
import { MOCK_PAYMENT_METHOD, PaymentMethod } from "./PaymentMethod.interface";
import { MOCK_PRODUCT, Product } from "./Product.interface";

export interface Order {
  id: string;
  orderType: OrderType;
  paymentMethod: PaymentMethod;
  client: Client;
  products: Product[];
  subtotal: number;
  delivery: number;
  taxes: number;
  total: number;
}


export const MOCK_ORDER: Order = {
  id: '',
  orderType: MOCK_ORDERTYPE,
  paymentMethod: MOCK_PAYMENT_METHOD,
  client: MOCK_CLIENT,
  products: [MOCK_PRODUCT],
  subtotal: 0,
  delivery: 0,
  taxes: 0,
  total: 0,

}
