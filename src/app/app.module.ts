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
import { ModalModule } from "./_modal/modal.module";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        DetailComponent,
        AdminComponent,
        CartComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule
    ]
})
export class AppModule { }
