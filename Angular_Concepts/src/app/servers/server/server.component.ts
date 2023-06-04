import {Component, Input, ViewEncapsulation} from "@angular/core"

@Component({
    "selector":"app-server",
    "templateUrl":"./server.Component.html",
    encapsulation:ViewEncapsulation.Emulated,
    styleUrls: ['./server.component.css']
    // encapsulation default is Emulated,could be none or native. 
    //It is for css style behaviour that gets appliedto only one component and not even child component. 
    //which is default emulated which is same as native. 
    //If you select none then it will applied to all component like lable {color:red} will set red for all labels of components
})

export class ServerComponent{
    @Input('index') indexReceived:number=0;
    @Input() serverName:string="";
 serverId:number =12;
 serverStatus: string = "Offline";
 getStatus():string{
    return "Received Index is "+this.indexReceived+" and Server Name is "+this.serverName;
 }
}