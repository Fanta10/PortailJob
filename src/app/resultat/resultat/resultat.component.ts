import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadfileService } from 'src/app/downloadfile.service';
import { HttpServiceTriCVService } from 'src/app/http-service-tri-cv.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  pages:number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  titre_offre: string;
  CvRetenus: string;
  results: any
  pourcentage : number
  data: any[];
  variable : any[]
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
  

  constructor(private route: ActivatedRoute,private downloads:HttpServiceTriCVService) { 
      //this.route.queryParams.subscribe(params => {this.titre_offre = params['TitreOffre'],this.CvRetenus = params['data']})
    
  }

  ngOnInit(): void {


    //this.data = [this.data1,this.data2]
    //console.log(typeof this.CvRetenus)
    //this.variable = JSON.parse(this.CvRetenus)
    this.results = JSON.parse(localStorage.getItem('resultsCv'));
    this.titre_offre = this.results.offre;
    this.CvRetenus = this.results.data;
    this.pourcentage = JSON.parse(localStorage.getItem('conf'));
    
    

  }

  // ouvrir() {
  //   this.CvRetenus.resume_path
  // }
  
// Définir la fonction pour ouvrir le CV
    ouvrirCV(nomCV: string) {
        // Remplacez l'URL de base et le dossier des CV selon votre configuration
        const baseUrl = 'D:\\AAAA\argon-design-system-angular-master\\argon-design-system-angular-master\\src\\assets\\cv\\';
        const cvPath = baseUrl + nomCV;
        
        // Ouvrir le CV dans une nouvelle fenêtre ou un nouvel onglet
        window.open(cvPath, '_blank');
    }

}
