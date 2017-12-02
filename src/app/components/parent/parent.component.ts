import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    title : string = "Parent Component";
    name:string;
    age:number;
    childData: string;

  parentData :any = {
    name :'Rahul',
    age:10
  }//  this data needs to pass to child component

  constructor() { }

  ngOnInit() {
  }

  getChildRecord = (data)=>{
      this.childData = data.childData;
  }

}
