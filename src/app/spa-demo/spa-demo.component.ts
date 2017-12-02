import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa-demo',
  templateUrl: './spa-demo.component.html',
  styleUrls: ['./spa-demo.component.css']
})
export class SpaDemoComponent implements OnInit {

  items: string[] = ['Angular4', 'Reactjs', 'TypeScript'];

  newItem: string = '';

  pushItem = () => {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem = (indx) => {
    this.items.splice(indx, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
