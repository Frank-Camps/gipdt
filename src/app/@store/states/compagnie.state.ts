import { Company } from "../../@interface/company.interface";

export interface ICompanyState {
  compagnies: Company[],
  selectedCompany: Company | undefined
}

export const INIT_COMPANY_STATE: ICompanyState = {
  compagnies: [],
  selectedCompany: undefined,
}
