import { Injectable } from '@angular/core';
import { Problem } from '../model/problem';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  problems:Problem[];
  
  constructor(private httpClient: HttpClient) {
  }
  
  getProblems(){
    return this.httpClient.get<Problem[]>('/api/v1/problems');
  }
  
  getProblemById(id: number) {
    return this.httpClient.get<Problem>('/api/v1/problems/'+id);
  }
  
  addProblem(problem: Problem){
    console.log("Data Service: receive problem: " + JSON.stringify(problem));
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json"); 
    return this.httpClient.post<Problem>('/api/v1/problems/', problem, {headers:headers});
  }
}
