import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
//import { ModelsComponent } from './app/models/models.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { AcercaService } from './services/acerca.service';
import { AutenticacionService } from './services/autenticacion.service';
import { EducacionService } from './services/educacion.service';
import { ExperienciaService } from './services/experiencia.service';
import { NavbarService } from './services/navbar.service';
import { ProyectosService } from './services/proyectos.service';
import { SkillsbService } from './services/skillsb.service';
import { SkillsfService } from './services/skillsf.service';
import { SkillssService } from './services/skillss.service';
import { BannerService } from './services/banner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';



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
    //ModelsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [
    AcercaService,
    AutenticacionService,
    BannerService,
    EducacionService,
    ExperienciaService,
    NavbarService,
    ProyectosService,
    SkillsbService,
    SkillsfService,
    SkillssService,
    InterceptorService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
