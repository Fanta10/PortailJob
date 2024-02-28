import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  titre_offre: string;
  data: any[];
 data1 = {
    nom: 'fanta',
    prenom: 'fatim',
    email: 'faaaa@gmail.comn',
    contact: '042587452145',
   cv: 'lien path cv',
    matching : '60%'
 };
  
  data2 = {
    nom: 'kess',
    prenom: 'andrrea',
    email: 'faaaa@gmail.comn',
    contact: '0514782356',
    cv: 'lien path cv',
    matching : '45%'
 };
  

  constructor(private route: ActivatedRoute) { 
      this.route.queryParams.subscribe(params => {this.titre_offre = params['TitreOffre']})
    
  }

  ngOnInit(): void {
this.data = [this.data1,this.data2]

  }
  


}
