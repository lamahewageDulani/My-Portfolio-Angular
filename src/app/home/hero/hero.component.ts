import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroDetailsArray: {title: string, description: string}[] = [
    {
      title: "Age",
      description: "25 years"
    },
    {
      title: "Experience",
      description: "Have worked on my own projects."
    },
    {
      title: "Country",
      description: "Sri Lanka"
    },
    {
      title: "E-mail",
      description: "dulaniruwanthika99@gmail.com"
    }
  ]
}
