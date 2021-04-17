import { Appartment } from '../../@interface/appartment.interface';
import { Building } from './../../@interface/Building.interface';
import { BuildingActions, buildingActionTypes, LoadBuildingAction, SelectBuildingAction, AddAppartment } from './../actions/building.action';
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

        case buildingActionTypes.ADD_APPARTMENT: {
            let appartment: Appartment = (action as AddAppartment).appartment;
            let alreadyExists = false;
            let appartmentIndex: number;

            for (const buildingAppartment of state.selectedBuilding.appartments) {
                if (buildingAppartment.civic_number === appartment.civic_number) {
                  alreadyExists = true;
                  appartmentIndex = state.selectedBuilding.appartments.indexOf(buildingAppartment);
                  console.log('appartment ', appartmentIndex);
                }
              }
            
            if (alreadyExists) {
            const newAppartment: Appartment =
                state.selectedBuilding.appartments.find((a) => a.civic_number === appartment.civic_number)
    
            let updatedAppartment: Appartment = { ...appartment };
            updatedAppartment = appartment;
    
            const updatedAppartments: Appartment[] = [...state.selectedBuilding.appartments];
            updatedAppartments[appartmentIndex] = updatedAppartment;

            let updatedBuilding: Building = {...state.selectedBuilding}
            updatedBuilding.appartments[appartmentIndex] = updatedAppartment;
    
            return {
                ...state,
                selectedBuilding: {...updatedBuilding},
            };
            } 
        }

        default: return state;
    }
}
