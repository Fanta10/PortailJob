import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceTriCVService } from 'src/app/http-service-tri-cv.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pages:number = 1;
  dataset: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  dataset1: any[];
  monOffre1: string = 'Data_Scientist'
  monOffre2: string = 'Developpeur_Full_Stack'
  monOffre3: string = 'Chef_Projet'
  chemin: string;
  nom_fichier: string;
  postule: any;
  keywords: string 
  CvRetenus: any[];
  conf: string;
  confNumber: number


  constructor(private route:Router, private http : HttpServiceTriCVService) { }

  ngOnInit(): void {
    this.conf = localStorage.getItem('conf')
    // Convertir la valeur en nombre
 this.confNumber = parseInt(localStorage.getItem('conf')); // Pour les nombres entiers
    console.log('conf ' + this.conf)
    console.log('type' +this. confNumber)
    console.log(typeof this.confNumber)
  }

  sendInfos(offre) {
    var formData = new FormData();
    console.log("offre " + offre)
     keywords : "deep learning, machine learning"
    this.chemin = "./uploads/" + offre + "/cv"
     console.log("chemin " + this.chemin)
    this.nom_fichier ="./uploads/" + offre + "/description/"+ offre +"_description.pdf  "
    // formData.append("resume_folder",this.chemin)
    // formData.append("job_path",this.nom_fichier)
    // formData.append("keywords","deep learning, machine learning")
    // formData.append("threshold",45)
    this.keywords="deep learning, machine learning"
    this.postule = {
      resume_folder: this.chemin,
      job_path: this.nom_fichier,
      keywords : "deep learning, machine learning"
    }
    this.http.postTricv2(this.chemin,this.nom_fichier,this.keywords,this.confNumber).subscribe(data => {
      console.log('data' + JSON.stringify(data));
      this.CvRetenus = data;
      localStorage.setItem("resultsCv", JSON.stringify({ data, offre }))
       this.route.navigate(['/resultat'])

      console.log('data' + this.CvRetenus);

      console.log('data' + this.nom_fichier);

    }, (err) => {
      console.log(err)
    });
    
   
    
    
    
    
    
  }

}
