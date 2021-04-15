import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appartment, MOCK_APPARTMENT } from '../../../../@interface/appartment.interface';
import { Building } from '../../../../@interface/Building.interface';
import { MOCK_TENANT, Tenant } from '../../../../@interface/Tenant.interface';
import { IAppState } from '../../../../@store';
import { BuildingSelector } from '../../../../@store/selectors/building.selector';

@Component({
  selector: 'ngx-new-appartment-dialog',
  templateUrl: './new-appartment-dialog.component.html',
  styleUrls: ['./new-appartment-dialog.component.scss']
})
export class NewAppartmentDialogComponent implements OnInit {

  public tenant: Tenant = {...MOCK_TENANT};
  @Input() appartment: Appartment;
  public appartments: Appartment[] = [];

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {

  }

  public addNewTenantToAppartment(appartment: Appartment): void {
    let selectedAppartment: Appartment;
    this.store.select(BuildingSelector.selectedBuilding).subscribe((building: Building) => {
      selectedAppartment = building.appartments.find(c => c === appartment);
      console.log(selectedAppartment);
      
    })

  }


}
