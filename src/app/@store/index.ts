import { IBuildingState } from './states/building.state';
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { buildingReducer } from "./reducers/building.reducer";
import { orderReducer } from "./reducers/order.reducer";
import { IOrderState } from "./states/order.state";

export interface IAppState {
    orders: IOrderState;
    buildings: IBuildingState
}

export const reducers: ActionReducerMap<IAppState> = {
    orders: orderReducer,
    buildings: buildingReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
