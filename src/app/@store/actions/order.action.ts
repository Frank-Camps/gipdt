// tslint:disable: max-classes-per-file
import { Action } from "@ngrx/store";
import { Order } from "../../@interface/Order.interface";

// a quoi sert ce Orders ?
const CATEGORY: string = "Orders";

export interface IOrderAction {
    SELECT_ORDER: string;
    SAVE_ORDER: string;
    UPDATE_ORDER_TYPE: string;
    CREATE_ORDER: string;
    GET_ALL_ORDERS: string;
    SAVE_ORDER_SUCCESS: string;
    LOAD_ORDERS: string;
    DELETE_ORDER: string;
}

export const orderActionTypes: IOrderAction = {
    SELECT_ORDER: `[${CATEGORY}] Select`,
    GET_ALL_ORDERS: `[${CATEGORY}] Get all`,
    SAVE_ORDER: `[${CATEGORY}] Save`,
    UPDATE_ORDER_TYPE: `[${CATEGORY}] Update type`,
    CREATE_ORDER: `[${CATEGORY}] Create`,
    SAVE_ORDER_SUCCESS: `[${CATEGORY}] Save successful`,
    LOAD_ORDERS: `[${CATEGORY}] Load`,
    DELETE_ORDER: `[${CATEGORY}] Delete`,

};

export class SelectOrderAction implements Action {
    type: string = orderActionTypes.SELECT_ORDER;

    public constructor(public orderId: string) { }
}

export class CreateOrderAction implements Action {
    type: string = orderActionTypes.CREATE_ORDER;

    public constructor(public order: Order) { }
}

export class SaveOrderAction implements Action {
    type: string = orderActionTypes.SAVE_ORDER;

    public constructor(public order: Order) { }
}

export class GetAllOrdersAction implements Action {
    type: string = orderActionTypes.GET_ALL_ORDERS;

    public constructor() { }
}

export class UpdateOrderTypeAction implements Action {
    type: string = orderActionTypes.UPDATE_ORDER_TYPE;

    public constructor(public id: string, public newType: string) { }
}

export class SaveOrderSuccessAction implements Action {
    type: string = orderActionTypes.SAVE_ORDER_SUCCESS;

    public constructor(public order: Order) { }
}

export class LoadOrdersAction implements Action {
    type: string = orderActionTypes.LOAD_ORDERS;

    public constructor(public orders: Order[]) { }
}

export class DeleteOrderAction implements Action {
    type: string = orderActionTypes.DELETE_ORDER;

    public constructor(public id: string) { }
}

export type OrderActions =
    SelectOrderAction |
    LoadOrdersAction |
    SaveOrderSuccessAction |
    UpdateOrderTypeAction |
    CreateOrderAction |
    GetAllOrdersAction |
    SaveOrderAction |
    DeleteOrderAction;
