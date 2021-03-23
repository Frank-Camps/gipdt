import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-new-building-dialog',
  templateUrl: './new-building-dialog.component.html',
  styleUrls: ['./new-building-dialog.component.scss']
})
export class NewBuildingDialogComponent implements OnInit {

  public newBuilding = {
    id: '',
    number: '',
    street: ''
  }

  constructor(protected ref: NbDialogRef<NewBuildingDialogComponent>) { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.ref.close(this.newBuilding);
  }

}
