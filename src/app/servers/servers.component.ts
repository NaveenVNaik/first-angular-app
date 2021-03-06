import { Component, OnInit } from '@angular/core';

@Component({
  //using css tag element
  selector: 'app-servers',

  //using css attributes
  //selector: '[app-servers]',

  //using css class
  //selector: '.app-servers',

  templateUrl: './servers.component.html',

  // instead of above templateUrl we can use inline html template as well
  // template: `
  //   <h3>Inside servers components inline template</h3>
  //   <app-server></app-server>
  //   <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = "Server was never created !";
  serverCreated = false;
  serverName = 'Two way binding !!!';
  addedServerName = '';
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 4000);
  }

  ngOnInit() {
  }

  onServerCreate = () => {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreateStatus = 'Server created !'
    this.addedServerName = this.serverName;
  }

  putServerName = (event) => this.serverName = event.target.value;

}
