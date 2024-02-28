import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-admin',
  templateUrl: './landing-admin.component.html',
  styleUrls: ['./landing-admin.component.css']
})
export class LandingAdminComponent implements OnInit {

  monOffre1: string = 'Réseau telecom'
  monOffre2: string = 'Developpeur Full Stack'
  monOffre3: string = 'Chef Projet'
  

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  sendInfos(offre) {
    this.route.navigate(['/resultat'], { queryParams: { TitreOffre: offre } })
    
    
    
    
  }

}
