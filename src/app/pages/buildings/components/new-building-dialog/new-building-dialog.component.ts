import { MOCK_BUILDING } from './../../../../@interface/Building.interface';
import { SaveBuildingAction } from './../../../../@store/actions/building.action';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../@store';
import { Building } from '../../../../@interface/Building.interface';
import { HttpIdsService } from '../../../../@service/ids.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'ngx-new-building-dialog',
  templateUrl: './new-building-dialog.component.html',
  styleUrls: ['./new-building-dialog.component.scss']
})
export class NewBuildingDialogComponent implements OnInit {

  public newBuilding: Building = {...MOCK_BUILDING};

  constructor(protected ref: NbDialogRef<NewBuildingDialogComponent>, public store: Store<IAppState>) { }

  ngOnInit(): void {

  }

  public submit(): void {
    this.ref.close();
    this.store.dispatch(new SaveBuildingAction(this.newBuilding))
    this.newBuilding = {...MOCK_BUILDING}
  }

  public close(): void {
    this.ref.close();
  }

}
