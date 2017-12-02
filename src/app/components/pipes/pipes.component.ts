import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = 'Rahul';
  day = new Date(1992, 3, 15);

  arr = [3, 5, 8, 2, 9];
  constructor() { }

  ngOnInit() {
  }

}
