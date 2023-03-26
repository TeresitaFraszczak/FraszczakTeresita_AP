import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/acerca/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/acerca/experiencia/experiencia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsBComponent } from './components/skills/skills-b/skills-b.component';
import { SkillsFComponent } from './components/skills/skills-f/skills-f.component';
import { SkillsSComponent } from './components/skills/skills-s/skills-s.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    EducacionComponent,
    BannerComponent,
    FooterComponent,
    ExperienciaComponent,
    NavbarComponent,
    PortfolioComponent,
    ProyectosComponent,
    SkillsComponent,
    SkillsBComponent,
    SkillsFComponent,
    SkillsSComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
