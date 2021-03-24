import { Action } from "@ngrx/store";
import { Building } from "../../@interface/Building.interface";

const CATEGORY: string = "Building";

export interface IBuildingAction {
    GET_ALL_BUILDING: string;
    SAVE_BUILDING: string;
    SELECT_BUILDING: string;
    LOAD_BUILDINGS: string;
}

export const buildingActionTypes: IBuildingAction = {
    SELECT_BUILDING: `[${CATEGORY}] Select`,
    SAVE_BUILDING: `[${CATEGORY}] Save`,
    GET_ALL_BUILDING: `[${CATEGORY}] Get All`,
    LOAD_BUILDINGS: `[${CATEGORY}] Load`,
}

export class GetAllBuildingsAction implements Action {
    type: string = buildingActionTypes.GET_ALL_BUILDING;

    public constructor() { }
}

export class SaveBuildingAction implements Action {
    type: string = buildingActionTypes.SAVE_BUILDING;

    public constructor(public building: Building) { }
}

export class SelectBuildingAction implements Action {
    type: string = buildingActionTypes.SELECT_BUILDING;

    public constructor(public buildingId: string) { }
}

export class LoadBuildingAction implements Action {
    type: string = buildingActionTypes.LOAD_BUILDINGS;

    public constructor(public buildings: Building[]) { }
}


export type BuildingActions = 
GetAllBuildingsAction |
SaveBuildingAction |
SelectBuildingAction 