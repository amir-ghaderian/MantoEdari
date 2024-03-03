import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  { path: 'admin', component: AdminComponent },
  { path: 'cart', component: CartComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "", component: MainComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

