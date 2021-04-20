import { Appartment } from './../../../../@interface/appartment.interface';
import { NewAppartmentDialogComponent } from './../new-appartment-dialog/new-appartment-dialog.component';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService, NbGetters, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Building } from '../../../../@interface/Building.interface';
import { IAppState } from '../../../../@store';
import { DeleteBuildingAction, SelectBuildingAction } from '../../../../@store/actions/building.action';
import { NewBuildingDialogComponent } from '../new-building-dialog/new-building-dialog.component';
import { MOCK_APPARTMENT } from '../../../../@interface/appartment.interface';
import { BuildingSelector } from '../../../../@store/selectors/building.selector';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  // name: string;
  // size: string;
  // kind: string;
  // items?: number;
  Appartment: Appartment;
}

@Component({
  selector: 'ngx-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss']
})
export class BuildingCardComponent implements OnInit, OnDestroy {
  @Input() building: Building;
  public subs: Subscription[] = [];
  public appartments: Appartment[] = [];
  public appartment: Appartment;

  public customColumn: string[] = ['civic_number', 'rooms', 'price', 'status'];
  public defaultColumns: string[] = [  ];
  public allColumns: string[] = [ ...this.customColumn ]
  public dataSource: NbTreeGridDataSource<any>;
  public sortColumn: string = '';
  public sortDirection: NbSortDirection = NbSortDirection.NONE;



  public data: TreeNode<Appartment>[] = [];

  constructor(private dialogService: NbDialogService, private store:Store<IAppState>, private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>) {
  }

  ngOnInit(): void {
    let tempData = [];
    let data = {};

    this.building.appartments.forEach((appartment: Appartment) => {
      // console.log('appartment ', appartment);
      this.appartment = {...appartment};
      data = {civic_number: appartment.civic_number, rooms: appartment.rooms, price: appartment.price, status: appartment.status, tenants: [...appartment.tenants]}
      tempData.push({...data});
      console.log('temp ', tempData);

    })
    this.data = [...tempData];  
    const getters: NbGetters<FSEntry, FSEntry> = {
      dataGetter: (node: FSEntry) => node,
      // childrenGetter: (node: FSEntry) => node.childEntries || undefined,
      // expandedGetter: (node: FSEntry) => !!node.expanded,
    };
    this.dataSource = this.dataSourceBuilder.create(this.data, getters);
  }

  ngOnDestroy(): void {}

  public updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  public getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }
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

  public addNewAppartment(id: string): void {
    this.store.dispatch(new SelectBuildingAction(this.building.id)); //select le bon building
    this.dialogService.open(NewAppartmentDialogComponent, {context: {appartment: {...MOCK_APPARTMENT}}});//ouvre le dialog avec appart vide

  }

  public selectAppartment(appartment: Appartment):void {
    this.store.dispatch(new SelectBuildingAction(this.building.id));
    this.dialogService.open(NewAppartmentDialogComponent, {context: {appartment: {...appartment}}})
  }


}
