import { Action } from "@ngrx/store";
import { Appartment } from "../../@interface/appartment.interface";
import { Building } from "../../@interface/Building.interface";

const CATEGORY: string = "Building";

export interface IBuildingAction {
    GET_ALL_BUILDING: string;
    SAVE_BUILDING: string;
    SELECT_BUILDING: string;
    LOAD_BUILDINGS: string;
    DELETE_BUILDING: string;
    ADD_APPARTMENT: string;
}

export const buildingActionTypes: IBuildingAction = {
    SELECT_BUILDING: `[${CATEGORY}] Select`,
    SAVE_BUILDING: `[${CATEGORY}] Save`,
    GET_ALL_BUILDING: `[${CATEGORY}] Get All`,
    LOAD_BUILDINGS: `[${CATEGORY}] Load`,
    DELETE_BUILDING: `[${CATEGORY}] Delete`,
    ADD_APPARTMENT: `[${CATEGORY}] Add appartment`,

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

export class DeleteBuildingAction implements Action {
    type: string = buildingActionTypes.DELETE_BUILDING;

    public constructor(public buildingID: string) { }
}

export class AddAppartment implements Action {
    type: string = buildingActionTypes.ADD_APPARTMENT;
    public constructor(public appartment: Appartment) {}
}


export type BuildingActions =
GetAllBuildingsAction |
SaveBuildingAction |
SelectBuildingAction |
AddAppartment
