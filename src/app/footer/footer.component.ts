import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  linkedinLink: string="https://www.linkedin.com/in/dulani-lamahewage/";
  githubLink: string="https://github.com/lamahewageDulani";
  facebookLink: string="";

  socialLinks: {name: string, link: string}[] = [
    {name: 'logo-linkedin', link: this.linkedinLink},
    {name: 'logo-github', link: this.githubLink},
    {name: 'logo-facebook', link: this.facebookLink}
  ]

  socialLogos: string[] = [
    "logo-linkedin",
    "logo-github",
    "logo-facebook"
  ];

}
