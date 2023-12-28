import { Component } from '@angular/core';
import { AuthenticationHelper } from './helpers/authentication.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filmes-ui';

  isLogged = false;

  constructor(private authenticationHelp: AuthenticationHelper) {

      if (authenticationHelp.get() != null) {
        console.log("Estou logado");
        this.isLogged = true;
      } else {
        console.log("não logado");
        this.isLogged = false;
      }
  }
}
