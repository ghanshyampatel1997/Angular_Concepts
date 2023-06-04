import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  @ViewChild('localReference',{static:false}) localReferencedElementOfDOM:ElementRef | undefined;
GoingToAlert(arg0: string) {
alert(arg0);
}
  @Input() receiveFromParent:{name:string,description:string}={name:"",description:""};
  @Output("AliasNameForParentCompEvent") EventEmiterForParent=new EventEmitter<{name:string}>();
  allNewServer = false;
  createdServerStatus="No Server is created yet";
  inputServer = "Predefined server";
  servers =['server1','server2'];
  constructor() {
    setTimeout(() => {
      this.allNewServer = true;
    }, 2000)
  };

  onServerCreate(){
    this.servers.push(this.inputServer);
    this.createdServerStatus = "Server is created!!";
  };
  onServerInput(event:Event){
    //console.log((<HTMLInputElement>event.target).value);
    this.inputServer=(<HTMLInputElement>event.target).value;
  };
  getColor(){
    return this.allNewServer===true ? "Green":"Red";
  };

  sendInfoToAppComponent(){
    this.EventEmiterForParent.emit({name:this.inputServer});
  }
}
