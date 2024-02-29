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
  myFormenv!: FormGroup;
  monOffre1: string = 'Data_Scientist'
  monOffre2: string = 'Developpeur_Full_Stack'
  monOffre3: string = 'Chef_Projet'
  Offres=[this.monOffre1,this.monOffre2,this.monOffre3]

  constructor( private fb : FormBuilder,  private route: Router){}

  

  ngOnInit() { 
    this.myFormenv = this.fb.group({

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
    this.route.navigate(['/post'],{queryParams:{TitreOffre:offre}})
  }

}
