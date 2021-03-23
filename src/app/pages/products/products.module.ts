import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductPropertiesComponent } from './product-properties/product-properties.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { PropertiesFormDialogComponent } from './properties-form-dialog/properties-form-dialog.component';
import { ProductsAllComponent } from './products-all/products-all.component';



@NgModule({
  declarations: [ProductsComponent, ProductFormComponent, ProductPropertiesComponent, PropertiesFormDialogComponent, ProductsAllComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    FormsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbAccordionModule,
    NbListModule,
    NbIconModule,
  ]
})
export class ProductsModule { }
