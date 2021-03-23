import {createSelector, MemoizedSelector} from "@ngrx/store";
import { Order } from "../../@interface/Order.interface";
import { IAppState } from "../index";
import { IOrderState } from "../states/order.state";

export namespace OrderSelector {
    const orderState: (state: IAppState) => IOrderState = (state: IAppState) => state.orders;

    export const selectedOrder: MemoizedSelector<IAppState, Order | undefined> = createSelector(
        orderState,
        (state: IOrderState) => state.selectedOrder,
    );

    export const orders: MemoizedSelector<IAppState, Order[] | undefined> = createSelector(
        orderState,
        (state: IOrderState) => state.orders,
    );
}
