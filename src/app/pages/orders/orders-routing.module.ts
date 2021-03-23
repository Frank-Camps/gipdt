import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersComponent } from './orders.component';



const routes: Routes = [{
  path: '',
  component: OrdersComponent,
  children: [
    {
      path: 'add',
      component: OrderFormComponent,
    },
    {
      path: 'view',
      component: OrdersListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
