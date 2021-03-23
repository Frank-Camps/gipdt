import { Order } from "../../@interface/Order.interface";

export interface IOrderState {
    orders: Order[];
    selectedOrder: Order | undefined;
}

export const INIT_ORDER_STATE: IOrderState = {
    orders: [],
    selectedOrder: undefined,
};
