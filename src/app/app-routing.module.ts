import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainComponent,DetailComponent]

