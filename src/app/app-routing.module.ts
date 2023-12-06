import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';


import { HeaderComponent } from './header/header.component';

const routes: Routes = [

 
  { path: "detail/:id", component: DetailComponent },
  { path: "mainlist", component: MainComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

