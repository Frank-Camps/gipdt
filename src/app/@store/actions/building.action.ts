import { Action } from "@ngrx/store";

const CATEGORY: string = "Building";

export interface IBuildingAction {
    SELECT_BUILDING: string;
}

export const buildingActionTypes: IBuildingAction = {
    SELECT_BUILDING: `[${CATEGORY}] Select`,
}

export class SelectBuildingAction implements Action {
    type: string = buildingActionTypes.SELECT_BUILDING;

    public constructor(public buildingId: string) { }
}

export type BuildingActions = 
SelectBuildingAction 