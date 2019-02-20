import { Component, OnInit } from '@angular/core';
import { Problem } from '../../model/problem';
import { DataService } from '../../services/data.service';

const DEFAULT_PROBLEM : Problem = Object.freeze({
  id:0,
  name:"",
  desc:"",
  difficulty:""
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  newProblem: Problem
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }

  addProblem(){
    console.log("New-problem Component: send problem: " + JSON.stringify(this.newProblem));
    this.dataService.addProblem(this.newProblem).subscribe(
      problem => {
        console.log("New-problem receive problem: " + JSON.stringify(problem));
      }
    )
    
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }
}
