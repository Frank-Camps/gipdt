import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingsComponent } from './buildings.component';



const routes: Routes = [{
  path: '',
  component: BuildingsComponent,
  children: [
    // {
    //   path: '',
    //   component: ProductsAllComponent,
    // },
    // {
    //   path: 'add',
    //   component: ProductFormComponent,
    // },
    // {
    //   path: 'properties',
    //   component: ProductPropertiesComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingsRoutingModule {
}
