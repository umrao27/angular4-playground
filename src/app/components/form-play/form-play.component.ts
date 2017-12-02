import { Component, OnInit  } from '@angular/core';
import { FormGroup,  FormControl } from '@angular/forms'; // for module driven form
import{ UserDataService } from "../../user-data.service"; // import service

@Component({
  selector: 'app-form-play',
  templateUrl: './form-play.component.html',
  styleUrls: ['./form-play.component.css']
})
export class FormPlayComponent implements OnInit {
    language:string[];
    form;// for module driven form

  constructor( private formService: UserDataService) { }

  ngOnInit() {

    this.language = ["C++","Java",".Net","Javascript","TypeScript"];

      // for module driven form
      this.form = new FormGroup({
          firstname : new FormControl('Rahul'),
           lastname : new FormControl(), 
           languages : new FormControl()
       });

       console.log(this.formService.success());
       
  }

  getFormData = (user)=>{
    console.log(user);
  }


}
