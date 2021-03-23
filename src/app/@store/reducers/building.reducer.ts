import { BuildingActions, buildingActionTypes } from './../actions/building.action';
import { IBuildingState, INIT_BUILDING_STATE } from './../states/building.state';

export function buildingReducer (state: IBuildingState = INIT_BUILDING_STATE, action: BuildingActions): IBuildingState {
    switch(action.type) {

        case buildingActionTypes.SELECT_BUILDING: {
            return {
                ...state
            }
        }

        default: return state;
    }
}