import { createSelector } from '@ngrx/store';
import { Building } from './../../@interface/Building.interface';
import { MemoizedSelector } from '@ngrx/store';
import { IBuildingState } from './../states/building.state';
import { IAppState } from './../index';

export namespace BuildingSelector {
    const buildingState: (state: IAppState) => IBuildingState = (state: IAppState) => state.buildings

    export const buildings: MemoizedSelector<IAppState, Building[] | undefined> = createSelector(
        buildingState,
        (state: IBuildingState) => state.buildings,
    );
    export const selectedBuilding: MemoizedSelector<IAppState, Building | undefined> = createSelector(
      buildingState,
      (state: IBuildingState) => state.selectedBuilding,
  );
}
