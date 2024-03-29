import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceTriCVService } from 'src/app/http-service-tri-cv.service';

@Component({
  selector: 'app-landing-admin',
  templateUrl: './landing-admin.component.html',
  styleUrls: ['./landing-admin.component.css']
})
export class LandingAdminComponent implements OnInit {

  monOffre1: string = 'Data_Scientist'
  monOffre2: string = 'Developpeur_Full_Stack'
  monOffre3: string = 'Chef_Projet'
  chemin: string;
  nom_fichier: string;
  postule: any;
  keywords: string 
  CvRetenus: any[];


  constructor(private route:Router, private http : HttpServiceTriCVService) { }

  ngOnInit(): void {
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
    this.http.postTricv(this.chemin,this.nom_fichier,this.keywords).subscribe(data => {
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
