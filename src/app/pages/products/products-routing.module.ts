import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductPropertiesComponent } from './product-properties/product-properties.component';
import { ProductsAllComponent } from './products-all/products-all.component';
import { ProductsComponent } from './products.component';



const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: '',
      component: ProductsAllComponent,
    },
    {
      path: 'add',
      component: ProductFormComponent,
    },
    {
      path: 'properties',
      component: ProductPropertiesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
