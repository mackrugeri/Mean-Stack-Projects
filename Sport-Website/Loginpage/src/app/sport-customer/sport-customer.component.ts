import { AdminPanelComponent } from './../admin-panel/admin-panel.component';
// import { AdminMatchSession } from './../shared/admin-match-session.model';
// import { PlayersessionService } from './../shared/playersession.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import {AdminPanelComponent} from '../admin-panel/admin-panel.component';

import {PlayersessionService} from "../shared/playersession.service";
import {Playersession} from "../shared/playersession.model";

import {AdminMatchSessionService} from "../shared/admin-match-session.service"
import {AdminMatchSession} from "../shared/admin-match-session.model"

import {Coachranking} from '../shared/coachranking.model'
import {CoachrankingService} from '../shared/coachranking.service'
import {AdminPraticeSession} from '../shared/admin-pratice-session.model'
import {AdminPracticeSessionService} from '../shared/admin-practice-session.service'

import { empty } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-sport-customer',
  templateUrl: './sport-customer.component.html',
  styleUrls: ['./sport-customer.component.css'],
  providers :[PlayersessionService,AdminMatchSessionService,CoachrankingService,AdminPracticeSessionService],
})
export class SportCustomerComponent implements OnInit {
  public apc:AdminPanelComponent;
  // apc:AdminPanelComponent;
  public pressed = 0;
  // public cc:CoachComponent;
  // private attendence:string;
  // public apc:AdminPanelComponent;
  constructor(public SportCustomer:PlayersessionService,public Player:AdminMatchSessionService,public coach:CoachrankingService,public AdminMatch:AdminPracticeSessionService) { }

  ngOnInit(): void {
  }
 public Marked()
 {
   alert('Attendence is marked');
   
   this.pressed = 1;
   this.refresh();
   this.refreshes();
   this.refreshing();
   delay(10);
 }

 resetForm(form?: NgForm)
 {
   if(form)
   {
     form.reset();
     this.SportCustomer.selectedEmployee=
     {
      _id:"",
      Name:"",
      Time:"",
      game:"",
      ranking:"",
      prority:"",
      

     }
     alert("Hello world");
   }
 }

 refreshList() {
   // alert("Hello world");
   this.SportCustomer.getEmpolyee().subscribe((res) => {
     this.SportCustomer.employee = res as Playersession[];
   });
 }
 addRequest(form:NgForm,Player,Gtime,Gname,ranking,prority)
 {
  this.SportCustomer.postEmployee(form.value,Player,Gtime,Gname,ranking,prority).subscribe((res)=>{
    this.resetForm(form);
    this.refreshList();
  });
 }
 onSubmit(form: NgForm)
 {
  //  this.SportCustomer.postEmployee(form.value).subscribe((res)=>{   
  //    this.resetForm(form);
  //    alert("Save SuccessFully");
  //    this.refreshEmployeeList();
     
  //  });
 }
 refreshEmployeeList() {
   // alert("Hello world");
   this.SportCustomer.getEmpolyee().subscribe((res) => {
     this.SportCustomer.employee = res as Playersession[];
   });
  }
  refreshing()
  {
    alert("hello")
    this.Player.getEmpolyee().subscribe((res)=>{
      this.Player.employee = res as AdminMatchSession[];


    });
    // this.apc.refreshEmployeeList_schedule()
  }
  refresh()
  {
    this.coach.getEmpolyee().subscribe((res)=>{
      this.coach.employee = res as Coachranking[];
    });
  }
  refreshes()
  {
    this.AdminMatch.getEmpolyee().subscribe((res)=>{
      this.AdminMatch.employee = res as AdminPraticeSession[];
    });
  }
}
