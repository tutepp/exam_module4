import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeUpdateComponent } from './awesome-update/awesome-update.component';


const routes: Routes = [

  {
    path: 'awesomes',
    component: AwesomeListComponent
  },
  {
    path: 'awesomes/edit/:id',
    component: AwesomeUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
