import { Subscription } from 'rxjs';
import { SaveBuildingAction, buildingActionTypes, GetAllBuildingsAction } from './../../@store/actions/building.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { IAppState } from '../../@store';
import { NewBuildingDialogComponent } from './components/new-building-dialog/new-building-dialog.component';
import { BuildingSelector } from '../../@store/selectors/building.selector';
import { Building } from '../../@interface/Building.interface';

@Component({
  selector: 'ngx-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit, OnDestroy {

  constructor(private dialogService: NbDialogService, public store: Store<IAppState>) { }

  public subs: Subscription[] = [];
  public buildings: Building[] = [];
  

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
    this.dialogService.open(NewBuildingDialogComponent, {/*context: {newBuilding: this.building} */})
    /*.onClose.subscribe((newBuilding) => {
      if(this.buildings.length === 0) {
        newBuilding.id === '1';
      }
      if (newBuilding.street_number === '' || newBuilding.street_name === '') {
        return false;
      }
      newBuilding.id = (this.buildings.length  + 1).toString()
      newBuilding && this.buildings.push(newBuilding)
      console.log('newBuilding', newBuilding)
      // this.store.dispatch(new SaveBuildingAction(newBuilding));
  });*/
  }

}
// creer une action dispatch new savebuilding et passer infos en parametres
// dans l<action public constructor(public order: Order)
// ne passera pas ds le reducer, mais dans l'effect direct.
