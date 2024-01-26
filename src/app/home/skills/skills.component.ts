import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillsArray: {bgcolor: string, logo: string, label: string}[] = [
    {bgcolor: "background-color: hsl(177, 39%, 72%)", logo: "logo-html5", label: "HTML"},
    {bgcolor: "background-color: hsl(41, 99%, 64%)", logo: "logo-css3", label: "CSS"},
    {bgcolor: "background-color: hsl(19, 97%, 85%)", logo: "logo-react", label: "React JS"},
    {bgcolor: "background-color: hsl(221, 100%, 79%)", logo: "logo-angular", label: "Angular"},
  ];

}
