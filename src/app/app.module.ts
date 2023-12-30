import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    HeaderComponent,
    DetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
