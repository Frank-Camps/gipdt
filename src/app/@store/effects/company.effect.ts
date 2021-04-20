import { HttpCompagniesService } from '../../@service/router/company.service';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AxiosResponse } from "axios";
import { companyActionTypes, DeleteCompanyAction, GetAllCompagniesAction, LoadCompagniesAction, SaveCompanyAction } from '../actions/company.action';

@Injectable()
export class CompanyEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    modifyCompany$: Observable<GetAllCompagniesAction> = this.actions$.pipe(
        ofType<SaveCompanyAction>(companyActionTypes.SAVE_COMPANY),
        map((action: SaveCompanyAction) => action.company),
        switchMap(company => HttpCompagniesService.putCompanyById(company.id, company)),
        map((response: AxiosResponse<any>) => {
            // console.log("put Building response: ", response.data);
            return new GetAllCompagniesAction();
        })
    );

    @Effect()
    getAllCompagnies$: Observable<LoadCompagniesAction> = this.actions$.pipe(
        ofType<GetAllCompagniesAction>(companyActionTypes.GET_ALL_COMPAGNIES),
        switchMap(() => HttpCompagniesService.getCompagnies()),
        map((response: AxiosResponse<any>) => {
            // console.log("get all orders response: ", response.data);
            return new LoadCompagniesAction(response.data);
        })
    );

    @Effect()
    deleteCompany$: Observable<GetAllCompagniesAction> = this.actions$.pipe(
        ofType<DeleteCompanyAction>(companyActionTypes.DELETE_COMPANY),
        map((action: DeleteCompanyAction) => action.companyID),
        switchMap(id => HttpCompagniesService.deleteCompanyById(id)),
        map((response: AxiosResponse<any>) => {
            // console.log("delete order response: ", response.data);
            return new GetAllCompagniesAction();
        })
    );
}
