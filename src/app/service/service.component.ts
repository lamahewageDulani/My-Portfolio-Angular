import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  
    servicesArray: {color: string, icon: string, title: string, description: string}[] = [
      {
        color: 'background-color: hsl(177, 39%, 72%)',
        icon: 'phone-portrait-outline',
        title: 'UI/UX Design',
        description: 'I am designing the user interface and user experience for the web and mobile applications. I am using Figma for designing the UI/UX.'
      },
      {
        color: 'background-color: hsl(41, 99%, 64%)',
        icon: 'laptop-outline',
        title: 'Development',
        description: 'I give my best to develop the web applications using the latest technologies like ReactJS, Angular and Spring Boot.'
      }
    ]
      
}
