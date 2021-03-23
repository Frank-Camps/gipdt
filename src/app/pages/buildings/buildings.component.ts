import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewBuildingDialogComponent } from './components/new-building-dialog/new-building-dialog.component';

@Component({
  selector: 'ngx-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  public buildings: string[] = [];

  ngOnInit(): void {
  }

  public addNewBuilding(): void {
    this.dialogService.open(NewBuildingDialogComponent, {hasScroll: true})
    .onClose.subscribe(newBuilding => {
      if(this.buildings.length === 0) {
        newBuilding.id === '1';
      }
      if (newBuilding.number === '' || newBuilding.street === '') {
        return false;
      }
      newBuilding.id = (this.buildings.length  + 1).toString()
      newBuilding && this.buildings.push(newBuilding)
      console.log('newBuilding', newBuilding)
  });
  }

}
