import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { CompagniesRoutingModule } from "./compagnies-routing.module";
import { CompagniesComponent } from "./compagnies.component";
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';

@NgModule({
  declarations: [CompagniesComponent, CompanyDialogComponent],
  imports: [
    ThemeModule,
    CommonModule,
    CompagniesRoutingModule,
    NbTreeGridModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    NbIconModule,
    FormsModule,
    NbCardModule,
  ]
})

export class CompagniesModule {}
