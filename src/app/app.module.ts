import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    HeaderComponent,
    DetailComponent,
    AdminComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // this is required for the actual http request
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
