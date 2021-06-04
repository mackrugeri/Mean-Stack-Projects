import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {AdminMatchSession} from './admin-match-session.model'

@Injectable({
  providedIn: 'root'
})
export class AdminMatchSessionService {

  selectedEmployee : AdminMatchSession;
  employee : AdminMatchSession[];
  readonly baseURL = "http://localhost:3000/MatchSession";

  constructor(private http:HttpClient) { }

  
  postEmployee(emp:AdminMatchSession,Pname,game,pranking,coach,court,Time,Oname,Oranking)
  {
    emp.Pname=Pname;
    emp.game=game;
    emp.pranking=pranking;
    emp.coach=coach;
    emp.Time=Time;
    emp.Oname=Oname;
    emp.Oranking=Oranking;
      // alert(emp);
      return this.http.post(this.baseURL,emp);
  }

  getEmpolyee()
  {
    return this.http.get(this.baseURL);
  }
}
