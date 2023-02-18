import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }

  getData(){
    return this.http.get("https://dummyjson.com/products");
  }

  login(username: string, password: string):any {  
    if (username == "admin" && password == "admin") {  
      localStorage.setItem('currentUser', "loggedin"); 
      return true;   
    }  
  }  
  logout() {  
    localStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }
}
