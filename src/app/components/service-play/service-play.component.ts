import { Component, OnInit } from '@angular/core';
import{ UserDataService } from "../../user-data.service"; // import service

@Component({
  selector: 'app-service-play',
  templateUrl: './service-play.component.html',
  styleUrls: ['./service-play.component.css']
})
export class ServicePlayComponent implements OnInit {

  constructor( private myService:UserDataService) {}

  ngOnInit() {
    //console.log(this.myService.success());

    this.myService.fetchData();
  }
}
