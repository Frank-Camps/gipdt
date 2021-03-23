import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployesAddComponent } from './employes-add/employes-add.component';
import { EmployesAllComponent } from './employes-all/employes-all.component';
import { EmployesComponent } from './employes.component';



const routes: Routes = [{
  path: '',
  component: EmployesComponent,
  children: [
    {
      path: '',
      component: EmployesAllComponent,
    },
    {
      path: 'add',
      component: EmployesAddComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployesRoutingModule {
}
