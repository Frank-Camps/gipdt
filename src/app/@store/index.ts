import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { orderReducer } from "./reducers/order.reducer";
import { IOrderState } from "./states/order.state";

export interface IAppState {
    orders: IOrderState;
}

export const reducers: ActionReducerMap<IAppState> = {
    orders: orderReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
