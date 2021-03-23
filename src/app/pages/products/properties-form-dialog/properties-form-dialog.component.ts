import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

interface Category  {
  id: string;
  name: string;
  property;
  properties: string[];
}

@Component({
  selector: 'ngx-properties-form-dialog',
  templateUrl: './properties-form-dialog.component.html',
  styleUrls: ['./properties-form-dialog.component.scss']
})
export class PropertiesFormDialogComponent implements OnInit {

  public category: Category = {
    id: '',
    name: '',
    property: '',
    properties: []
  };

  constructor(protected ref: NbDialogRef<PropertiesFormDialogComponent>) { }

  ngOnInit(): void {
  }

  public cancel():void {
    this.ref.close();
  }

  public submit(category: Category):void {
    this.ref.close(category);
  }

}
