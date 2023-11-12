import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TododetailComponent } from './tododetail/tododetail.component';

const routes: Routes = [
  {path:'', component: TodolistComponent},
  {path:'detail/:detailId',component:TododetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
