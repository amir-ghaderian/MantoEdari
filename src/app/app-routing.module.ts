import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';


import { HeaderComponent } from './header/header.component';

const routes: Routes = [

 
  { path: "detail/:id", component: DetailComponent },
  { path: "", component: MainComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

