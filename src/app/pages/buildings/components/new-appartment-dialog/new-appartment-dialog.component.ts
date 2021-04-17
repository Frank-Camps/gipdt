import { AddAppartment, SaveBuildingAction, SelectBuildingAction } from './../../../../@store/actions/building.action';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appartment, MOCK_APPARTMENT } from '../../../../@interface/appartment.interface';
import { Building, MOCK_BUILDING } from '../../../../@interface/Building.interface';
import { MOCK_TENANT, Tenant } from '../../../../@interface/Tenant.interface';
import { IAppState } from '../../../../@store';
import { BuildingSelector } from '../../../../@store/selectors/building.selector';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-new-appartment-dialog',
  templateUrl: './new-appartment-dialog.component.html',
  styleUrls: ['./new-appartment-dialog.component.scss']
})
export class NewAppartmentDialogComponent implements OnInit {

  public tenant: Tenant = {...MOCK_TENANT};
  // @Input() appartment: Appartment; //receive from building-card component
  public appartment: Appartment = {...MOCK_APPARTMENT};
  public appartments: Appartment[] = [];

  constructor(private store: Store<IAppState>, protected ref: NbDialogRef<NewAppartmentDialogComponent>) { }

  ngOnInit(): void {
    this.store.select(BuildingSelector.selectedBuilding).subscribe(building => {
      this.appartments = building.appartments;
    })
    
    this.appartments.forEach(appartment => {
      console.log('appartment ', appartment);

      appartment.tenants.forEach(tenant => {
        console.log('tenant ', tenant);
      })
    })

  }

  public addNewTenantToAppartment(appartment: Appartment): void {

  }

  public addNewAppartment(appartment: Appartment):void {
    this.store.dispatch(new AddAppartment(appartment));
    let updatedSelectedBuilding: Building;
    this.store.select(BuildingSelector.selectedBuilding).subscribe((building: Building) => {
      updatedSelectedBuilding = building;
    })
    this.store.dispatch(new SaveBuildingAction(updatedSelectedBuilding));
    this.appartment = {...MOCK_APPARTMENT};
    this.appartment.tenants = [MOCK_TENANT]
    this.ref.close();
  }
}
