import { Injectable } from '@angular/core';
import {  Http  } from '@angular/http'; 
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  constructor(private http:Http) { }

  fetchData = ()=>{
        let url = 'https://jsonplaceholder.typicode.com/users';
    
        this.http.get(url).map(
          (response) => response.json()
        ).subscribe(
          (data)=>console.log(data)
        )
  }

  obj = {
    id:"1",
    name:"Rahul",
    rollno : "1234"
  }

  success = ()=>{
    return 'successfull';
  }

}
