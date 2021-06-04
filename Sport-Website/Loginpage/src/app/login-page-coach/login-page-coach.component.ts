import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';

import {Adminadd} from "../shared/adminadd.model";
import {AdminaddService} from '../shared/adminadd.service'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page-coach',
  templateUrl: './login-page-coach.component.html',
  styleUrls: ['./login-page-coach.component.css']
})
export class LoginPageCoachComponent implements OnInit {

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
        if(a.address=="Coach" || a.address =="coach")
        if(a.username == username.value)
        {
          if(a.password == password.value)
          {
            alert("sdgdfg");
            this._router.navigateByUrl('coach');
            break;
          }
        }
     }
    //  alert("Incorrect Userman or Password Plz correct it")
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
  
  this.Add.postEmployee(form.value,game,Ranking,Userman,Password,"Coach").subscribe((res)=>{   
  });
}
  onSubmit(form: NgForm,game:HTMLTextAreaElement,ranking:HTMLTextAreaElement,username:HTMLTextAreaElement,password:HTMLTextAreaElement)
  {
    alert(game);
    this.Add.postEmployee(form.value,game,ranking,username,password,"Coach").subscribe((res)=>{   
      this.resetForm(form);
 
      // this.refreshEmployeeList();

      
    });
  }


}
