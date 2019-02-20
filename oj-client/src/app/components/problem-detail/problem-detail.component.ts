import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from'@angular/router';
import { Problem } from '../../model/problem';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem:Problem;
  id:number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = +params.id;
      this.dataService.getProblemById(+params.id).subscribe(
        problem => this.problem = problem
      );
    })
  }

}
