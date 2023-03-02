import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingListComponent } from './housing-list/housing-list.component';


const routes: Routes = [
  { path: 'housingList', component: HousingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }