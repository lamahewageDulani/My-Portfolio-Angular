import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projectsArray: {name: string, topic: string, description: string, image: string, link: string, btnname: string}[] = [
    {
      name:'Web Design',
      topic:'Employee Performance Monitoring System.',
      description:'With the collaboration of five members team, we developed this system for the second year project of the university. This system is developed using ReactJS, Spring Boot and MySQL.',
      image:'./assets/images/portfolio-1.jpg',
      link: 'https://github.com/TrackoApplication',
      btnname: 'GitHub Link'
    },
    {
      name:'Hardware Project',
      topic:'Coconot Breaking, Scraping and Grinding machine',
      description:'With the collaboration of five members team, we developed this virtual machine for the first year project of the university. This machine is developed using C#, Atmel Studio and other related software.',
      image:'./assets/images/portfolio-2.jpg',
      link: '#',
      btnname:'View Project'
    }
  ];

}
