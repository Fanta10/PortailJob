import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  
  mylogin!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.mylogin = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  login() {
    if (this.mylogin.valid) {
      if ((this.mylogin.value.email == 'fanta.kamate@gs2e.ci') && (this.mylogin.value.pwd == 'fanta')) {
        this.router.navigate(['/admin']);
      }
      else {
        alert("Email ou mot de passe incorrect !");
      }
    }
    else {
      alert("Veuillez remplir correctement les champs.");
    }
  }
}
