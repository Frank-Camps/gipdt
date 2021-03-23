import { Building } from './../../@interface/Building.interface';

export interface IBuildingState  {
    buildings: Building[],
    selectedBuilding: Building | undefined
}

export const INIT_BUILDING_STATE: IBuildingState = {
    buildings: [],
    selectedBuilding: undefined,
} 