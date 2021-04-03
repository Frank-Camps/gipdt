import { Building } from './../../@interface/Building.interface';
import { BuildingActions, buildingActionTypes, LoadBuildingAction, SelectBuildingAction } from './../actions/building.action';
import { IBuildingState, INIT_BUILDING_STATE } from './../states/building.state';

export function buildingReducer (state: IBuildingState = INIT_BUILDING_STATE, action: BuildingActions): IBuildingState {
    switch(action.type) {

        case buildingActionTypes.SELECT_BUILDING: {
          const buildingId: string = (action as SelectBuildingAction).buildingId;
          let building: Building | undefined = state.buildings.find(o => o.id === buildingId);
          console.log(building, 'selectedBuilding in reducer')

            // if(!building) {
            //     building = {...MOCK_BUILDING};
            //     building.id = buildingId;
            // }
            return {
                ...state,
                selectedBuilding: {...building}
            }
        }

        case buildingActionTypes.LOAD_BUILDINGS: {
            return {
                ...state,
                buildings: (action as LoadBuildingAction).buildings
            }
        }

        default: return state;
    }
}
