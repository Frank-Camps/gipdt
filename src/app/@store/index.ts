import { IBuildingState } from './states/building.state';
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { buildingReducer } from "./reducers/building.reducer";
import { ICompanyState } from './states/compagnie.state';
import { companyReducer } from './reducers/company.reducer';

export interface IAppState {
    buildings: IBuildingState,
    compagnies: ICompanyState
}

export const reducers: ActionReducerMap<IAppState> = {
    buildings: buildingReducer,
    compagnies: companyReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
