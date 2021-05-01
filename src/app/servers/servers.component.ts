import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
      setTimeout(() => {
        this.allowNewServer=false;
      }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Server Name is '+this.serverName;
  }


  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
