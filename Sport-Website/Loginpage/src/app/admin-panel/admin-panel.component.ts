import { Playersession } from './../shared/playersession.model';
import { Component, OnInit } from '@angular/core';

import {AdminaddService} from "../shared/adminadd.service";
import {Adminadd} from "../shared/adminadd.model";
import {AdminPracticeSessionService} from "../shared/admin-practice-session.service"
import {AdminPraticeSession} from "../shared/admin-pratice-session.model"
import {AdminMatchSessionService} from "../shared/admin-match-session.service"
import {AdminMatchSession} from "../shared/admin-match-session.model"
import {PlayersessionService} from "../shared/playersession.service"

import {SportCustomerComponent} from '../sport-customer/sport-customer.component'

import { NgForm } from '@angular/forms'; 
// import { from } from 'rxjs';


declare var M:any;

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [AdminaddService,AdminPracticeSessionService,AdminMatchSessionService],
})
export class AdminPanelComponent implements OnInit {

  Pss:SportCustomerComponent;  
  constructor( public AddService: AdminaddService,public AddPracticeSession:AdminPracticeSessionService,public AddMatchSession:AdminMatchSessionService,public   player:PlayersessionService) {
    // this.refreshEmployeeList();
   }
  //  emp = Playersession;
  ngOnInit(): void {
    
    this.refreshEmployeeList();
    this.resetForm();
    this.resetForm_match();
    this.resetForm_schedule();
    
  }
  Checking()
  {
   if(this.Pss.pressed)
   {
     alert("Player not online");
   }
   else{
     alert("Player is online");
   }
  }
  Refreshit() {
    // alert("Hello world");
    this.player.getEmpolyee().subscribe((res) => {
      this.player.employee = res as Playersession[];
      // for(let a of this.player.employee)
    });
  }
  resetForm(form?: NgForm)
  {
    if(form)
    {
      form.reset();
      this.AddService.selectedEmployee =
      {
        _id : "",
        status: "",
        game :"",
        ranking :"",
        username:"",
        password:"",
        address:"",
      }
    }
  }
  resetForm_schedule(formSchedule?: NgForm)
  {
    
    if(formSchedule)
    {
      
      formSchedule.reset();
      alert("I am calling");
      this.AddPracticeSession.selectedEmployee = 
      {
        
      _id:"",
      Pname:"",
      game:"",
      pranking:"",   
      coach:"",
      court:"",
      Time:"",
      Oname:"",
      Oranking:"",
      }
    }
  }
resetForm_match(formSchedule?: NgForm)
  {
    
    if(formSchedule)
    {
      
      formSchedule.reset();
      alert("I am calling");
      this.AddMatchSession.selectedEmployee = 
      {
        
      _id:"",
      Pname:"",
      game:"",
      pranking:"",   
      coach:"",
      court:"",
      Time:"",
      Oname:"",
      Oranking:"",
      }
    }
  }
  Addplayer(form,game,ranking,username,password,status)
  {
      this.AddService.postEmployee(form.value,game,ranking,username,password,status).subscribe((res)=>{
      this.resetForm(form);
      alert("Save SuccessFully");
      this.refreshEmployeeList();
    })
  }
  addParticeSession(form:NgForm,Pname,game,pranking,coach,court,Time,Oname,Oranking)
  {
     this.resetForm(form);
     this.AddPracticeSession.postEmployee(form.value,Pname,game,pranking,coach,court,Time,Oname,Oranking).subscribe((res)=>{
      this.refreshEmployeeList_schedule();
    });
  }
  addMatch(form:NgForm,Pname,game,pranking,coach,court,Time,Oname,Oranking)
  {
    this.AddMatchSession.postEmployee(form.value,Pname,game,pranking,coach,court,Time,Oname,Oranking).subscribe((res)=>{
      this.resetForm(form);
      this.refreshEmployeeList_match();
    });
  }
  onSubmit(form: NgForm)
  {
    // this.AddService.postEmployee(form.value,"afsdf","sfsd","sfsd","sfsd").subscribe((res)=>{   
    //   this.resetForm(form);
    //   alert("Save SuccessFully");
    //   this.refreshEmployeeList();
      
    
  }
  onSubmit_schedule(form:NgForm)
  {
    alert("Save Successfully");
    this.AddPracticeSession.postEmployee(form.value,":Ssd","sdfsd","sdfsd","sdfds","sfdsd","sfsd","sdsfsd","sdfsd").subscribe((res)=>{
      this.resetForm(form);
      this.refreshEmployeeList();
      

    });
  }
  onSubmit_match(form:NgForm)
  {
    alert("Save Successfully");
    this.AddMatchSession.postEmployee(form.value,"fasdf","sdfsd","sdfsd","sdfds","sfdsd","sfsd","sdsfsd","sdfsd").subscribe((res)=>{
      this.resetForm(form);
      this.refreshEmployeeList();
      

    });
  }
  refreshEmployeeList() {
    // alert("Hello world");
    this.AddService.getEmpolyee().subscribe((res) => {
      this.AddService.employee = res as Adminadd[];
    });
  }
  refreshEmployeeList_schedule() {
    // alert("Hello world");
    this.AddPracticeSession.getEmpolyee().subscribe((res) => {
      this.AddPracticeSession.employee = res as AdminPraticeSession[];
    });
    return 0;
  }
  refreshEmployeeList_match() {
    alert("Hello world");
    this.AddMatchSession.getEmpolyee().subscribe((res) => {
      this.AddMatchSession.employee = res as AdminPraticeSession[];
    });
  }
  onEdit(emp:Adminadd)
  {
    this.AddService.selectedEmployee = emp;
  }
  onDelete(emp:Adminadd)
  {
    alert("I am Presed");
  }
}
