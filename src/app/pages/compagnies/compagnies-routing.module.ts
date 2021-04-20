import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompagniesComponent } from "./compagnies.component";

const routes: Routes = [{
  path: '',
  component: CompagniesComponent,
  children: []

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CompagniesRoutingModule {}
