import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Coachranking } from './coachranking.model';

@Injectable({
  providedIn: 'root'
})
export class CoachrankingService {

   selectedEmployee : Coachranking;
  employee : Coachranking[];
  readonly baseURL = "http://localhost:3000/CoachSession";

  constructor(private http:HttpClient) { }
  postEmployee(emp:Coachranking,player,time,gname,ranking)
  {
      emp.Playername=player;
      emp.TimeDuration=time;
      emp.Game=gname;
      emp.ranking=ranking;
      return this.http.post(this.baseURL,emp);
  }

  getEmpolyee()
  {
    alert("I am hitted");
    return this.http.get(this.baseURL);
  }
  putEmployee(emp: Coachranking) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
