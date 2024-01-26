import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { HeroComponent } from './home/hero/hero.component';
import { ClientComponent } from './home/client/client.component';
import { AboutComponent } from './home/about/about.component';
import { SkillsComponent } from './home/skills/skills.component';
import { CtaComponent } from './home/cta/cta.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ClientComponent,
    AboutComponent,
    SkillsComponent,
    CtaComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
