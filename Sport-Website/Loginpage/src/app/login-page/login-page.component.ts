import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import {Adminadd} from "../shared/adminadd.model";
import {AdminaddService} from '../shared/adminadd.service'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  bacgroundvideo:string = "../asserts/images/hello.mp4"
  constructor(public Add:AdminaddService,private _router:Router) { }
  
  ngOnInit(): void {

  }
  foo(username:HTMLTextAreaElement,password:HTMLTextAreaElement){
    alert("Hello world");

    alert("The user name is " + username.value + "\n" +"The password is"+ password.value )
    // flag =0;
    this.Add.getEmpolyee().subscribe((res) => {
      this.Add.employee = res as Adminadd[];   
      for(let a of this.Add.employee) {
        if(a.username == username.value)
        {
          if(a.password == password.value)
          {
            alert("sdgdfg");
            this._router.navigateByUrl('playerUser');
            break;
          }
        }
     }
    });

  }
  OnSignup(Game:HTMLTextAreaElement,Ranking:HTMLTextAreaElement,username:HTMLTextAreaElement,password:HTMLTextAreaElement)
  {
    alert(username.value + password.value)
  }

  resetForm(form?:NgForm)
  {
    if(form)
    {
      form.reset();
      this.Add.selectedEmployee =
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
  refreshEmployeeList() {
    // alert("Hello world");
    this.Add.getEmpolyee().subscribe((res) => {
      this.Add.employee = res as [];
    });
  }
l
sign(game,Ranking,Userman,Password,form:NgForm)
{
  alert(game+Ranking+Userman+Password);
  
  this.Add.postEmployee(form.value,game,Ranking,Userman,Password,"Player").subscribe((res)=>{   
  });
}
  onSubmit(form: NgForm,game:HTMLTextAreaElement,ranking:HTMLTextAreaElement,username:HTMLTextAreaElement,password:HTMLTextAreaElement)
  {
    alert(game);
    this.Add.postEmployee(form.value,game,ranking,username,password,"Player").subscribe((res)=>{   
      this.resetForm(form);
 
      // this.refreshEmployeeList();

      
    });
  }

  
}
