import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  regForm = new FormGroup({
    fullName : new FormControl("",[Validators.required]),
    city : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required]),
    password : new FormControl("",[Validators.required]),
  }  
  )

  ngOnInit(): void {
  }
  signUp(item:any){
    console.log(item)
  }

  // here define getter
  get fullName(){
    return this.regForm.get("fullName")
  }
  get city(){
    return this.regForm.get("city")
  }
  get email(){
    return this.regForm.get("email")
  }
  get password(){
    return this.regForm.get("password")
  }
}
