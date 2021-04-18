import { AddAppartment, SaveBuildingAction } from './../../../../@store/actions/building.action';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appartment, MOCK_APPARTMENT } from '../../../../@interface/appartment.interface';
import { Building } from '../../../../@interface/Building.interface';
import { MOCK_TENANT, Tenant } from '../../../../@interface/Tenant.interface';
import { IAppState } from '../../../../@store';
import { BuildingSelector } from '../../../../@store/selectors/building.selector';
import { NbDialogRef } from '@nebular/theme';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ngx-new-appartment-dialog',
  templateUrl: './new-appartment-dialog.component.html',
  styleUrls: ['./new-appartment-dialog.component.scss']
})
export class NewAppartmentDialogComponent implements OnInit {

  public appartment: Appartment = {...MOCK_APPARTMENT};
  public appartments: Appartment[] = [];

  constructor(private store: Store<IAppState>, protected ref: NbDialogRef<NewAppartmentDialogComponent>) {}
  ngOnInit(): void {

  }

  public addNewTenantToAppartment(appartment: Appartment): void {
    this.appartment.tenants = [...appartment.tenants, {...MOCK_TENANT}];
  }

  public addNewAppartment(appartment: Appartment):void {
    this.store.dispatch(new AddAppartment(appartment));
    let updatedSelectedBuilding: Building;
    this.store.select(BuildingSelector.selectedBuilding).subscribe((building: Building) => {
      updatedSelectedBuilding = {...building};
    })
    this.store.dispatch(new SaveBuildingAction(updatedSelectedBuilding));
    this.appartment = {...MOCK_APPARTMENT};
    this.appartment.tenants = [MOCK_TENANT]
    this.ref.close();
  }
}
