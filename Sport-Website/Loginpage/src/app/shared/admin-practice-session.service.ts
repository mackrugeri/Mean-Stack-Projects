import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {AdminPraticeSession} from './admin-pratice-session.model'

@Injectable({
  providedIn: 'root'
})
export class AdminPracticeSessionService {

  selectedEmployee : AdminPraticeSession;
  employee : AdminPraticeSession[];
  readonly baseURL = "http://localhost:3000/PraticeSession";

  constructor(private http:HttpClient) { }

  postEmployee(emp:AdminPraticeSession,Pname,game,pranking,coach,court,Time,Oname,Oranking)
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
