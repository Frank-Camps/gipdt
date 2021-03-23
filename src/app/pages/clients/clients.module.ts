import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsAllComponent } from './clients-all/clients-all.component';
import { ClientsComponent } from './clients.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';



@NgModule({
  declarations: [ClientsComponent, ClientsAllComponent, ClientsAddComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    RouterModule,
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
export class ClientsModule { }
