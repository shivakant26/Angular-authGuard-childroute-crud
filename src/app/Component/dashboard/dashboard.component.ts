import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/api/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 data : any ;
 list : any ;
  constructor(private services : DataService, private router : Router) {
   
   }

  ngOnInit(): void {
    this.services.getData().subscribe((res)=>{
      this.data = res;
      this.list = this.data.products;
      console.log(this.list);
    })
  }
  logout() {  
    this.services.logout(); 
    this.router.navigate([""]) 
  }

}
