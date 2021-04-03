import { MOCK_TENANT, Tenant } from './../../../../@interface/Tenant.interface';
import { NewAppartmentDialogComponent } from './../new-appartment-dialog/new-appartment-dialog.component';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Building, MOCK_BUILDING } from '../../../../@interface/Building.interface';
import { IAppState } from '../../../../@store';
import { DeleteBuildingAction, SelectBuildingAction } from '../../../../@store/actions/building.action';
import { BuildingSelector } from '../../../../@store/selectors/building.selector';
import { NewBuildingDialogComponent } from '../new-building-dialog/new-building-dialog.component';
import { Appartment, MOCK_APPARTMENT } from '../../../../@interface/appartment.interface';

@Component({
  selector: 'ngx-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss']
})
export class BuildingCardComponent implements OnInit, OnDestroy {

  // @Input() newBuilding;
  @Input() newBuilding: Building;
  public subs: Subscription[] = [];
  public appartments: Appartment[] = [];


  constructor(private dialogService: NbDialogService, private store:Store<IAppState>) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {}

  public selectBuilding(id: string):void {
    this.store.dispatch(new SelectBuildingAction(id));
  }

  public modifyBuilding(building): void {
    this.store.dispatch(new SelectBuildingAction(building.id));
    this.dialogService.open(NewBuildingDialogComponent, {context: {newBuilding: {...building}}})

  }

  public deleteBuilding(id: string): void {
    this.store.dispatch(new DeleteBuildingAction(id));
  }

  public addNewAppartment(): void {
    this.store.dispatch(new SelectBuildingAction(this.newBuilding.id));
    this.dialogService.open(NewAppartmentDialogComponent, {context: {appartment: {...MOCK_APPARTMENT}}})
  }

  public selectAppartment(appartment: Appartment):void {
    this.store.dispatch(new SelectBuildingAction(this.newBuilding.id));
    console.log('civic_number ', appartment)
    this.dialogService.open(NewAppartmentDialogComponent, {context: {appartment: appartment}})
  }


}
