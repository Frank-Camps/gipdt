import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { BuildingsComponent } from './buildings.component';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { BuildingCardComponent } from './components/building-card/building-card.component';
import { NewBuildingDialogComponent } from './components/new-building-dialog/new-building-dialog.component';
import { NewAppartmentDialogComponent } from './components/new-appartment-dialog/new-appartment-dialog.component';



@NgModule({
  declarations: [BuildingsComponent, BuildingCardComponent, NewBuildingDialogComponent, NewAppartmentDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    BuildingsRoutingModule,
    FormsModule,
    NbFormFieldModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbAccordionModule,
    NbListModule,
    NbIconModule,
  ]
})
export class BuildingsModule { }