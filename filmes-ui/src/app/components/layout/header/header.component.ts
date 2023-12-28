import { Component, OnInit } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationHelper: AuthenticationHelper) { }

  ngOnInit(): void {
  }

  saida = faRightFromBracket;

  logout() {
    this.authenticationHelper.signOut();
  }

}
