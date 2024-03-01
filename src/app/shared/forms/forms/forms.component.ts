import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpServiceCVService } from 'src/app/http-service-cv.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  titreOffre: string;
  postule!: FormGroup;
  chemincv: any;
  chemindest: string = 'D:/CV';
  ma_data: any;

  

  file: File;

  constructor(private router : Router,private route: ActivatedRoute, private fb:FormBuilder, private apiCV: HttpServiceCVService) { 
    this.route.queryParams.subscribe(params => {this.titreOffre = params['TitreOffre']})
  }

  ngOnInit(): void {
    this.postule = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      cv: [''],
      contact:[''],
    })
    
  }

  save() {
    
    this.ma_data = {
      cheminCv: this.chemincv,
      chemindest : this.chemindest
    }
    var formData = new FormData();
    formData.append("file" , this.file)
    
    formData.append("title",this.titreOffre)
    console.log('file ' + this.file)
    console.log('upload_folder '+ this.chemindest)
      this.apiCV.postCV(formData).subscribe(data => {
        console.log(data);
        alert("offre ajoutée avec succès")
        window.location.reload()
        //this.router.navigate(['/admin'])
    });
    
    //console.log('cv' + JSON.stringify(this.postule.value))
  }

  onFileSelected(event: any) {
    // Récupérer le fichier sélectionné
    this.file = event.target.files[0];
    this.chemincv = this.file;
    //this.chemincv = event.target.files[0];
    // Effectuer les opérations nécessaires avec le fichier sélectionné
    //console.log(this.file);
    //console.log(event.target.value)

  }
  
}
