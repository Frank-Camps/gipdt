import { createSelector } from '@ngrx/store';
import { Building } from './../../@interface/Building.interface';
import { MemoizedSelector } from '@ngrx/store';
import { IBuildingState } from './../states/building.state';
import { IAppState } from './../index';
import { ICompanyState } from '../states/compagnie.state';
import { Company } from '../../@interface/company.interface';

export namespace CompanySelector {
    const companyState: (state: IAppState) => ICompanyState = (state: IAppState) => state.compagnies

    export const compagnies: MemoizedSelector<IAppState, Company[] | undefined> = createSelector(
        companyState,
        (state: ICompanyState) => state.compagnies,
    );
    export const selectedCompany: MemoizedSelector<IAppState, Company | undefined> = createSelector(
      companyState,
      (state: ICompanyState) => state.selectedCompany,
  );
}
