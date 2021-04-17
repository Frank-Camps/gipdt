import { HttpBuildingsService } from './../../@service/router/building.service';
import { buildingActionTypes, LoadBuildingAction, GetAllBuildingsAction, SaveBuildingAction, DeleteBuildingAction, AddAppartment } from './../actions/building.action';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AxiosResponse } from "axios";

@Injectable()
export class BuildingEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    modifyOrder$: Observable<GetAllBuildingsAction> = this.actions$.pipe(
        ofType<SaveBuildingAction>(buildingActionTypes.SAVE_BUILDING),
        map((action: SaveBuildingAction) => action.building),
        switchMap(building => HttpBuildingsService.putBuildingById(building.id, building)),
        map((response: AxiosResponse<any>) => {
            console.log("put Building response: ", response.data);
            return new GetAllBuildingsAction();
        })
    );

    @Effect()
    getAllOrders$: Observable<LoadBuildingAction> = this.actions$.pipe(
        ofType<GetAllBuildingsAction>(buildingActionTypes.GET_ALL_BUILDING),
        switchMap(() => HttpBuildingsService.getBuildings()),
        map((response: AxiosResponse<any>) => {
            console.log("get all orders response: ", response.data);
            return new LoadBuildingAction(response.data);
        })
    );

    @Effect()
    deleteOrder$: Observable<GetAllBuildingsAction> = this.actions$.pipe(
        ofType<DeleteBuildingAction>(buildingActionTypes.DELETE_BUILDING),
        map((action: DeleteBuildingAction) => action.buildingID),
        switchMap(id => HttpBuildingsService.deleteOrderById(id)),
        map((response: AxiosResponse<any>) => {
            console.log("delete order response: ", response.data);
            return new GetAllBuildingsAction();
        })
    );
}
