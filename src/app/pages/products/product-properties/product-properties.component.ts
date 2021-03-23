import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PropertiesFormDialogComponent } from '../properties-form-dialog/properties-form-dialog.component';

interface Category  {
  id: string;
  name: string;
  property;
  properties: string[];
}

@Component({
  selector: 'ngx-product-properties',
  templateUrl: './product-properties.component.html',
  styleUrls: ['./product-properties.component.scss']
})
export class ProductPropertiesComponent implements OnInit {

  // public category: Category = {id:'', name:'', property: '', properties: []};
  public categories: Category[] = [];

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  public addNewCatogory(){
    this.dialogService.open(PropertiesFormDialogComponent)
      .onClose.subscribe(category => {
        if(this.categories.length === 0) {
          category.id === '1';
        }
        if (category.name === '') {
          return false;
        }
        category.id = (this.categories.length  + 1).toString()
        category && this.categories.push(category)
    });
  }

  public addNewProperties(category): boolean {
    let categoryFound = this.categories.find(c => c.id === category.id)
    if (category.property === '') {
      return false;
    }
    categoryFound.properties.push(category.property);
    categoryFound.property = '';
  }

  public deleteProperty(id: string): void {
    let categoryFound = this.categories.find(c => c.id === id)
    this.categories.splice(this.categories.indexOf(categoryFound), 1);
  }

  public deleteOptionProperty(category: Category, property:string): void {
    let optionFound = category.properties.find(option => option === property);
    category.properties.splice(category.properties.indexOf(optionFound), 1);
  }

}
