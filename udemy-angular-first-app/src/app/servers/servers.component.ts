import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = '';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

    ngOnInit() {

    }

    onCreateServer() {
      this.serverCreated = true;
      this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
      this.servers.push(this.serverName);
    }

    onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
    }
}
