import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Playersession } from './playersession.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersessionService {

  selectedEmployee : Playersession;
  employee : Playersession[];
  readonly baseURL = "http://localhost:3000/PlayerSession";

  constructor(private http:HttpClient) { }
  postEmployee(emp:Playersession,Player,Gtime,Gname,ranking,prority)
  {
    emp.Name=Player;
    emp.Time= Gtime;
    emp.game = Gname;
    emp.ranking=ranking;
    emp.prority=prority;
      // alert(emp);
      return this.http.post(this.baseURL,emp);
  }

  getEmpolyee()
  {
    alert("i am called");
    alert(this.baseURL);
    return this.http.get(this.baseURL);
  }
}
