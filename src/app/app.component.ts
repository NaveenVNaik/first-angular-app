import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  //we can use inline style as well instead of refering to external file
  styles:[
    `
      h3{
        color:green;
      }
    `
  ]
})
export class AppComponent {

}
