import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  menu : Array<string> = ["home","about","help","application","login"];
  constructor(){
    this.menu
  }
  ngOnInit():void{

  }
}
