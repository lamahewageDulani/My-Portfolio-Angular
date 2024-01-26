import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  socialLogos: string[] = [
    "logo-facebook",
    "logo-twitter",
    "logo-instagram",
    "logo-linkedin",
    "logo-pinterest"
  ];

}
