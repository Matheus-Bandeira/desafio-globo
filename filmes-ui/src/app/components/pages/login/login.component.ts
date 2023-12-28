import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '../../../models/authentication.model';
import { AuthenticationHelper } from '../../../helpers/authentication.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private authenticationHelper: AuthenticationHelper
    ) { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get form(): any {
    return this.formLogin.controls;
  }

  onSubmit(): void {
    this.AuthService.auth(this.formLogin.value)
          .subscribe({
            next: (response: any) => {
              console.log("Minha resposta " + response);
              let auth = new Authentication();
              auth.id = response.id;
              auth.email = response.email;
              auth.nome = response.nome;
              auth.token = response.token;
              auth.roles = response.roles;
              this.authenticationHelper.signIn(auth);

              this.router.navigate(['/home']);
            }
          })
  }

}
