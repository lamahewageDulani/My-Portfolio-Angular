import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientsArray = [
    "assets/images/client-1.svg",
    "assets/images/client-2.svg",
    "assets/images/client-3.svg",
    "assets/images/client-4.svg",
    "assets/images/client-5.svg",
  ];

}
