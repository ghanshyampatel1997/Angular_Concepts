import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Concepts';
  sendingThisToServers={
    name:"Comming From App Component to Servers Component",
    description:"Component talk, Parent to Child and Child to sub child."
  };
  gotServerNameFromServersComp(nameReceivedFromServers:string){
    alert(nameReceivedFromServers);
  }
}