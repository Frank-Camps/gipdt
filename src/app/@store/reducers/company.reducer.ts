import { CompanyActions, companyActionTypes, LoadCompagniesAction } from '../actions/company.action';
import { ICompanyState, INIT_COMPANY_STATE } from '../states/compagnie.state';

export function companyReducer (state: ICompanyState = INIT_COMPANY_STATE, action: CompanyActions): ICompanyState {
    switch(action.type) {

      case companyActionTypes.SELECT_COMPAGNY: {
        return {
          ...state
        }
      }

      case companyActionTypes.LOAD_COMPAGNIES: {
        return {
            ...state,
            compagnies: (action as LoadCompagniesAction).compagnies
        }
    }

        default: return state;
    }
}
