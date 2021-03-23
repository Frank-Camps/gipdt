



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersNavigationComponent } from './orders-navigation/orders-navigation.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';




@NgModule({
  declarations: [OrdersComponent, OrdersNavigationComponent, OrderFormComponent, OrdersListComponent, DragAndDropComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbTreeGridModule,
    RouterModule,
    OrdersRoutingModule,
    DragDropModule,
  ]
})
export class OrdersModule {
}
