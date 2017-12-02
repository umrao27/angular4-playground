import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  constructor() {}

  ngOnChanges(){} // executed everytime when value of input property change , like $watch

  ngOnInit() {} // page load time and initialize the component, executes after constructor and after ngOnChanges hook for the first time

  ngDoCheck(){}
 
          ngAfterContentInit(){ } // Executes After   ngDoCheck(){}, but it called only 1 time
          ngAfterContentChecked(){ } 
           ngAfterViewInit(){ }
           ngAfterViewChecked(){ } 
 
  ngOnDestroy(){} //  Executes just before angular destroys the component  

}
