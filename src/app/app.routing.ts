import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NewOffreComponent } from './new-offre/new-offre.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultatComponent } from './resultat/resultat/resultat.component';
import { FormsComponent } from './shared/forms/forms/forms.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes =[
    { path: 'home',             component: LandingComponent},
    { path: 'user-profile',     component: HomeComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'post', component: FormsComponent },
  { path: 'resultat', component: ResultatComponent },
    { path: 'newOffre', component: NewOffreComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
