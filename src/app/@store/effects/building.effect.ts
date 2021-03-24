import { HttpBuildingsService } from './../../@service/router/building.service';
import { buildingActionTypes } from './../actions/building.action';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AxiosResponse } from "axios";
import { GetAllBuildingsAction, SaveBuildingAction } from "../actions/building.action";

@Injectable()
export class BuildingEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    modifyOrder$: Observable<GetAllBuildingsAction> = this.actions$.pipe(
        ofType<SaveBuildingAction>(buildingActionTypes.SAVE_BUILDING),
        map((action: SaveBuildingAction) => action.building),
        switchMap(building => HttpBuildingsService.putBuildingbyId(building.id, building)),
        map((response: AxiosResponse<any>) => {
            console.log("put Building response: ", response.data);
            return new GetAllBuildingsAction();
        })
    );

    // @Effect()
    // getAllOrders$: Observable<LoadOrdersAction> = this.actions$.pipe(
    //     ofType<GetAllOrdersAction>(orderActionTypes.GET_ALL_ORDERS),
    //     switchMap(() => HttpOrderService.getOrders()),
    //     map((response: AxiosResponse<any>) => {
    //         response.data.forEach((order: any)=> {
    //             order.client = order.client ? order.client : {...MOCK_CLIENT};
    //         });
    //         console.log("get all orders response: ", response.data);
    //         return new LoadOrdersAction(response.data);
    //     })
    // );

    // @Effect()
    // deleteOrder$: Observable<GetAllOrdersAction> = this.actions$.pipe(
    //     ofType<DeleteOrderAction>(orderActionTypes.DELETE_ORDER),
    //     map((action: DeleteOrderAction) => action.id),
    //     switchMap(id => HttpOrderService.deleteOrderById(id)),
    //     map((response: AxiosResponse<any>) => {
    //         console.log("delete order response: ", response.data);
    //         return new GetAllOrdersAction();
    //     })
    // );
}
