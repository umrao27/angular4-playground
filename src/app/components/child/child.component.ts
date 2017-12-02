import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() sendToChild:string;  

  @Output() sendToParent: EventEmitter<any> = new EventEmitter(); // for sending the data to parent component

  SelectRecord = ()=>{
          let childDataObj :any  = {
            childData:'Get Data from child'
          }
        this.sendToParent.emit(childDataObj);
  }

}
