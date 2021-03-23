
import { Order, MOCK_ORDER } from "../../@interface/Order.interface";
import { OrderActions, orderActionTypes, SelectOrderAction, LoadOrdersAction } from "../actions/order.action";
import {INIT_ORDER_STATE, IOrderState} from "../states/order.state";

// type OrderReducerType = (state: IOrderState, action: OrderActions) => IOrderState;

// tslint:disable-next-line:max-func-body-length
export function orderReducer(state: IOrderState = INIT_ORDER_STATE, action: OrderActions): IOrderState {
  switch (action.type) {

      case orderActionTypes.SELECT_ORDER: {
          const orderId: string = (action as SelectOrderAction).orderId;
          let order: Order | undefined = state.orders.find(o => o.id === orderId);
          if (!order) {
              order = { ...MOCK_ORDER };
              order.id = orderId;
          }

          return { ...state, selectedOrder: { ...order } };
      }

      case orderActionTypes.LOAD_ORDERS: {
          return {
              ...state,
              orders: (action as LoadOrdersAction).orders
          };
      }

      default: return state;
  }
};
