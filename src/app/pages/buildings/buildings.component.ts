import { Subscription } from 'rxjs';
import { SaveBuildingAction, buildingActionTypes, GetAllBuildingsAction, SelectBuildingAction } from './../../@store/actions/building.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { IAppState } from '../../@store';
import { NewBuildingDialogComponent } from './components/new-building-dialog/new-building-dialog.component';
import { BuildingSelector } from '../../@store/selectors/building.selector';
import { Building, MOCK_BUILDING } from '../../@interface/Building.interface';
import { AxiosResponse } from 'axios';
import { HttpIdsService } from '../../@service/ids.service';

@Component({
  selector: 'ngx-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit, OnDestroy {

  constructor(private dialogService: NbDialogService, public store: Store<IAppState>) { }

  public subs: Subscription[] = [];
  public buildings: Building[] = [];
  public building: Building = {...MOCK_BUILDING};
  public buildingId: string = '';


  ngOnInit(): void {
    this.subs.push(
      this.store.select(BuildingSelector.buildings).subscribe(buildings => {
          this.buildings = buildings
      })
    )
    this.store.dispatch(new GetAllBuildingsAction);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  public addNewBuilding(): void {
    HttpIdsService.getIndexId().then((id: AxiosResponse) => {
      HttpIdsService.putIndexId((id.data.value + 1) % 100).catch((e) => console.log(e));
      this.building.id = ((id.data.value).toString().padStart(2, "0"));
  }).catch((e) => console.log(e));

    this.dialogService.open(NewBuildingDialogComponent, {context: {newBuilding: {...this.building}}})
  }

}
// creer une action dispatch new savebuilding et passer infos en parametres
// dans l<action public constructor(public order: Order)
// ne passera pas ds le reducer, mais dans l'effect direct.
