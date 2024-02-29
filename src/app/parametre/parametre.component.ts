import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Builder } from 'protractor';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  myConf: FormGroup

  

  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {

    this.myConf = this.fb.group({
      conf: ['']
     
    })

  }
  save() {
    localStorage.setItem("conf", this.myConf.value.conf)
    this.route.navigate(['/admin'])

  }

}
