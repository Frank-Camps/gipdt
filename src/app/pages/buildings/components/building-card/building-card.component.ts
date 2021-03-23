import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewBuildingDialogComponent } from '../new-building-dialog/new-building-dialog.component';

@Component({
  selector: 'ngx-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss']
})
export class BuildingCardComponent implements OnInit {

  @Input() b;

  constructor() { }

  ngOnInit(): void {
  }

}
