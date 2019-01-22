import { Component, OnInit } from '@angular/core';
import { Problem } from "../../model/problem";

const PROBLEMS : Problem[] =[
  {
    id:1,
    name:"Two Sum",
    desc:"Given an array of integers, find two numbers such that they add up to a specific target number",
    difficulty:"easy"
  },
  {
    id:2,
    name:"Four Sum",
    desc:"Given an array of integers, find four numbers such that they add up to a specific target number",
    difficulty:"medium"
  }
]; 

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems:Problem[];
  constructor() { }

  ngOnInit() {
    this.problems = this.getProblems();

  }
  getProblems(){
    return PROBLEMS;
  }

}
