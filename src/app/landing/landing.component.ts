import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  postule!: FormGroup;
  monOffre1: string = 'Data_Scientist'
  monOffre2: string = 'Developpeur_Full_Stack'
  monOffre3: string = 'Chef_Projet'
  Offres = [this.monOffre1, this.monOffre2, this.monOffre3]

  dateExpirationOffre1: Date = new Date('2024-03-05'); // Exemple de date d'expiration
  // Ajoutez les autres dates d'expiration pour les autres offres
  dateExpirationOffre2: Date = new Date('2024-03-01');
  dateExpirationOffre3: Date = new Date('2024-03-01');

  constructor( private fb : FormBuilder,  private route: Router){}

  // Méthode pour vérifier si la date d'expiration est passée
checkExpiration(dateExpiration: Date): boolean {
    return new Date() > dateExpiration;
  
  }

  ngOnInit() { 
    this.postule = this.fb.group({

      nom:['', Validators.required],
      prenom:['', Validators.required],
      fonction:['', Validators.required],


      })
  }
  save() {
    this.route.navigate(['/'])
  }
  sendInfos(offre) {
    console.log('test ok')
   
    if (!this.checkExpiration(this.dateExpirationOffre1) || !this.checkExpiration(this.dateExpirationOffre2) || !this.checkExpiration(this.dateExpirationOffre3)) {
      // Désactiver le bouton et envoyer une notification par e-mail
      this.route.navigate(['/post'], { queryParams: { TitreOffre: offre } })
      //this.emailService.sendNotification('Le bouton "Postuler" est désactivé car la date d\'expiration est atteinte.');
    }
    else {
       //desactive le bouton
    }
    
  }

}
