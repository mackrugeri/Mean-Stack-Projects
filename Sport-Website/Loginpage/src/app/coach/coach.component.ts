import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 

import {CoachrankingService} from "../shared/coachranking.service";
import {Coachranking} from "../shared/coachranking.model";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
  providers :[CoachrankingService]
})
export class CoachComponent implements OnInit {

  constructor(public Rcoach:CoachrankingService) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm)
  {
    if(form)
    {
      form.reset();
      this.Rcoach.selectedEmployee=
      {
        _id : "",
        Playername: "",
        TimeDuration:"",
        Game:"",
        ranking:"",

      }
    }
  }
  ranking(form:NgForm,player,time,gname,ranking)
  {
    alert("Hello");
    this.Rcoach.postEmployee(form.value,player,time,gname,ranking).subscribe((res)=>{
      this.resetForm(form);
      this.refreshEmployeeList();
    })
  }
  onSubmit(form: NgForm,player,time,gname,ranking)
  {
    this.Rcoach.postEmployee(form.value,player,time,gname,ranking).subscribe((res)=>{   
      this.resetForm(form);
      alert("Save SuccessFully");
      this.refreshEmployeeList();
      
    });
  }
  refreshEmployeeList() {
    // alert("Hello world");
    this.Rcoach.getEmpolyee().subscribe((res) => {
      this.Rcoach.employee = res as Coachranking[];
    });
  }
  onEdit(emp:Coachranking)
  {
    alert("Hello");
    this.Rcoach.selectedEmployee = emp;
  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.Rcoach.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
      });
    }
  }
}
