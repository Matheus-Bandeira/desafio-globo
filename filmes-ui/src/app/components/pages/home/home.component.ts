import { Component, OnInit } from '@angular/core';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { Authentication } from 'src/app/models/authentication.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 nameUser : string = '';

 constructor(private authenticationHelper: AuthenticationHelper) { }

  ngOnInit(): void {
    const authInfo: Authentication | null = this.authenticationHelper.get();

    if (authInfo !== null) {
      console.log('Informações de autenticação:', authInfo);
      this.nameUser = authInfo.nome;
    } else {
      console.log('Nenhuma informação de autenticação encontrada.');
    }
  }

}
