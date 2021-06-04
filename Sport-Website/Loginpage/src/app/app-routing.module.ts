import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SportCustomerComponent} from './sport-customer/sport-customer.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginPageCoachComponent} from './login-page-coach/login-page-coach.component';
import {LoginPageAdminComponent} from './login-page-admin/login-page-admin.component';
import{CoachComponent} from './coach/coach.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';



const routes: Routes = [
{
  path:'playerUser',component:SportCustomerComponent
},
{
  path:'coach',component:CoachComponent
},
{
  path:"admin",component:AdminPanelComponent
},
{
  path:"",component:LoginPageComponent
},
{
  path:"coachlogin",component:LoginPageCoachComponent
},
{
  path:"coachlogin1",component:LoginPageCoachComponent
},
{
  path:"adminlogin",component:LoginPageAdminComponent
},
{
  path:"adminlogin1",component:LoginPageAdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }