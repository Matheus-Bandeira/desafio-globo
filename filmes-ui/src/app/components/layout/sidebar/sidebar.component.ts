import { Component, OnInit } from '@angular/core';
import { faGear, faCar, faRightFromBracket, faChartSimple, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private helper: AuthenticationHelper) { }

  ngOnInit(): void {
  }

  usuarioIcon = faUser;
  videoIcon = faVideo;

  isAdmin(): boolean {
    const userLogado = this.helper.get();
    var roles = userLogado?.roles;

    if (roles) {
      for (const role of roles) {
        if (role === 'ROLE_ADMIN') {
          return true; // Se a role for ROLE_ADMIN, retorna true imediatamente
        }
      }
    }
    return false;

  }
}
