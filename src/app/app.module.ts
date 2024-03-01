
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NavbaradminComponent } from './shared/navbaradmin/navbaradmin/navbaradmin.component';
import { FormsComponent } from './shared/forms/forms/forms.component';
import { LandingAdminComponent } from './shared/landingAdmin/landing-admin/landing-admin.component';
import { ResultatComponent } from './resultat/resultat/resultat.component';
import { NewOffreComponent } from './new-offre/new-offre.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ParametreComponent } from './parametre/parametre.component';

//import { AngularFileSaverModule } from 'angular-file-saver';
//import {compareAsc, format } from 'date-fns'; // Importez la fonction format de date-fns






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    NavbaradminComponent,
    FormsComponent,
    LandingAdminComponent,
    ResultatComponent,
    NewOffreComponent,
    ParametreComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    NgxPaginationModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
