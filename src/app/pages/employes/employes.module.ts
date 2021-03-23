import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { EmployesComponent } from './employes.component';
import { EmployesAddComponent } from './employes-add/employes-add.component';
import { EmployesAllComponent } from './employes-all/employes-all.component';
import { EmployesRoutingModule } from './employes-routing.module';



@NgModule({
  declarations: [EmployesComponent, EmployesAddComponent, EmployesAllComponent],
  imports: [
    CommonModule,
    RouterModule,
    EmployesRoutingModule,
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
export class EmployesModule { }
