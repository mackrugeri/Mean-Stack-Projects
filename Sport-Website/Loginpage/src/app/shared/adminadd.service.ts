import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import {map} from "rxjs/add/operator";
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import { Adminadd } from './adminadd.model';

@Injectable({
  providedIn: 'root'
})
export class AdminaddService {
  selectedEmployee : Adminadd;
  employee : Adminadd[];
  emp:Adminadd;
  readonly baseURL = "http://localhost:3000/empolyees";

  constructor(private http:HttpClient) { }

  postingEmployee(game,Ranking,username,password)
  {
    this.emp.game = game;
    this.emp.ranking=Ranking;
    this.emp.username=username;
    this.emp.password=password;
    return this.http.post(this.baseURL,this.emp);


    
  }
  

  postEmployee(emp:Adminadd,game,ranking,username,password,status)
  {
    emp.game = game;
    emp.ranking=ranking;
    emp.username=username;
    emp.password=password;
    emp.address=status;

    alert(emp.game);

      return this.http.post(this.baseURL,emp);
  }

  getEmpolyee()
  {
    return this.http.get(this.baseURL);
  }
}


