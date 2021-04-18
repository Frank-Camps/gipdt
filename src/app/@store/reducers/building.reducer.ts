import { Appartment } from '../../@interface/appartment.interface';
import { Building } from './../../@interface/Building.interface';
import { BuildingActions, buildingActionTypes, LoadBuildingAction, SelectBuildingAction, AddAppartment } from './../actions/building.action';
import { IBuildingState, INIT_BUILDING_STATE } from './../states/building.state';

export function buildingReducer (state: IBuildingState = INIT_BUILDING_STATE, action: BuildingActions): IBuildingState {
    switch(action.type) {

        case buildingActionTypes.SELECT_BUILDING: {
          const buildingId: string = (action as SelectBuildingAction).buildingId;
          let building: Building | undefined = state.buildings.find(o => o.id === buildingId);
          
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

        case buildingActionTypes.ADD_APPARTMENT: {
            let appartment: Appartment = (action as AddAppartment).appartment;
            let alreadyExists = false;
            let appartmentIndex: number;
            let selectedBuildingUpdated: Building;
            console.log('this app in reducer ', appartment);
            
            
            for (const a of state.selectedBuilding.appartments) {
                if(a.civic_number === appartment.civic_number ) {
                    alreadyExists = true;
                    appartmentIndex = state.selectedBuilding.appartments.indexOf(a);
                }
            }

            if(alreadyExists) {
                const newAppartment: Appartment = state.selectedBuilding.appartments.find(app => app.civic_number === appartment.civic_number)
                const updatedAppartment: Appartment = {...appartment};
                console.log('selectedBuildingUpdated ', updatedAppartment)

                const updatedAppartments: Appartment[] = [...state.selectedBuilding.appartments];
                updatedAppartments[appartmentIndex] = {...updatedAppartment}

                let selectedBuildingUpdated: Building = {...state.selectedBuilding, appartments: updatedAppartments}
                return {
                    ...state,
                    selectedBuilding: {...selectedBuildingUpdated}
                }
            }
            else {
                let selectedBuildingAppartment: Appartment[] = [...state.selectedBuilding.appartments, {...appartment}];
                let selectedBuildingUpdated: Building = {...state.selectedBuilding, appartments: selectedBuildingAppartment}
                console.log('selectedBuildingUpdated ', selectedBuildingUpdated)
                return {
                    ...state,
                    selectedBuilding: {...selectedBuildingUpdated}

                }
            }
        }
        default: return state;
    }
}
