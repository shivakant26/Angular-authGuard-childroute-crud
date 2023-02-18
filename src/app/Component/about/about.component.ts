import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id:number;
  name: string;
  age: number;
  city: string;
  phone: number;
}

const employee : PeriodicElement[] = [
  {id:1,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:2,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:3,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:4,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:5,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:6,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:7,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:8,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:9,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:10,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:11,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:12,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:13,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:14,name:"jhon",age:20,city:"florida",phone:1251441214},
  {id:15,name:"jhon",age:20,city:"florida",phone:1251441214},

]
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

displayedColumns: string[] = ['id','name','age', 'city', 'phone','action'];
data: PeriodicElement[] = employee;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
