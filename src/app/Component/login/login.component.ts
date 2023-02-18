import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/IModel/ILogin';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from 'src/app/services/api/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model : ILogin = {
    userName:"",
    password:""
  }
  constructor(private router : Router , private service: DataService) {
    if(this.service.loggedIn){
      this.router.navigate(['/dashboard'])
    }
   }

  ngOnInit(): void {
  }
  login(item:any){
    if (this.model.userName != '' && this.model.password != '') {  
      if (this.service.login(this.model.userName,this.model.password)) {  
        this.router.navigate(["/dashboard"]);  
      }else{
      alert("something went wrong!");
    }
    this.model={
      userName:"",
      password:""
    }
  }
}
}
