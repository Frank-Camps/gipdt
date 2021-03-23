import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsAllComponent } from './clients-all/clients-all.component';
import { ClientsComponent } from './clients.component';



const routes: Routes = [{
  path: '',
  component: ClientsComponent,
  children: [
    {
      path: '',
      component: ClientsAllComponent,
    },
    {
      path: 'add',
      component: ClientsAddComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {
}
