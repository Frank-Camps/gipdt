import { Action } from "@ngrx/store";
import { Appartment } from "../../@interface/appartment.interface";
import { Building } from "../../@interface/Building.interface";
import { Company } from "../../@interface/company.interface";

const CATEGORY: string = "Company";

export interface ICompanyAction {
    GET_ALL_COMPAGNIES: string;
    SELECT_COMPAGNY: string;
    LOAD_COMPAGNIES: string;
    SAVE_COMPANY: string;
    DELETE_COMPANY: string;
}

export const companyActionTypes: ICompanyAction = {
  GET_ALL_COMPAGNIES: `[${CATEGORY}] Get All`,
  SELECT_COMPAGNY: `[${CATEGORY}] Select`,
  SAVE_COMPANY: `[${CATEGORY}] Save`,
  LOAD_COMPAGNIES: `[${CATEGORY}] Load`,
  DELETE_COMPANY: `[${CATEGORY}] Delete`,


}

export class GetAllCompagniesAction implements Action {
    type: string = companyActionTypes.GET_ALL_COMPAGNIES;

    public constructor() { }
}

export class SaveCompanyAction implements Action {
    type: string = companyActionTypes.SAVE_COMPANY;

    public constructor(public company: Company) { }
}

export class SelectCompanyAction implements Action {
    type: string = companyActionTypes.SELECT_COMPAGNY;

    public constructor(public companyId: string) { }
}

export class LoadCompagniesAction implements Action {
    type: string = companyActionTypes.LOAD_COMPAGNIES;

    public constructor(public compagnies: Company[]) { }
}

export class DeleteCompanyAction implements Action {
    type: string = companyActionTypes.DELETE_COMPANY;

    public constructor(public companyID: string) { }
}



export type CompanyActions =
GetAllCompagniesAction |
SaveCompanyAction |
SelectCompanyAction |
DeleteCompanyAction |
LoadCompagniesAction
