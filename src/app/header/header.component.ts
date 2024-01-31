import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  navbarArray: {name: string, link: string}[] = [
    {name: 'Home', link: '/home'},
    {name: 'Service', link: '/service'},
    {name: 'Projects', link: '/portfolio'},
    {name: 'Contact', link: '/contact'}
  ];
}
