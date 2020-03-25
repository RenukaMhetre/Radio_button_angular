import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  readioSelected:any;
  showcontent:boolean=false;
  showContent(){
    this.showcontent=this.readioSelected;
  }
}
