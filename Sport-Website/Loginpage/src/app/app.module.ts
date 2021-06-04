import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SportCustomerComponent } from './sport-customer/sport-customer.component';
import { CoachComponent } from './coach/coach.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginPageCoachComponent } from './login-page-coach/login-page-coach.component';
import { LoginPageAdminComponent } from './login-page-admin/login-page-admin.component';
// import { AdminAddPlayerCoachComponent } from './admin-add-player-coach/admin-add-player-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SportCustomerComponent,
    CoachComponent,
    AdminPanelComponent,
    LoginPageCoachComponent,
    LoginPageAdminComponent,
    // AdminAddPlayerCoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
