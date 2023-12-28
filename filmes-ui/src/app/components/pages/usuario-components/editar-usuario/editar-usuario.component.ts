import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  userId: number = 0;
  userEdit: User = new User();

  constructor(private route: ActivatedRoute,
              private usuarioService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
    });

    this.usuarioService.getById(this.userId).subscribe(data => {
        this.userEdit = data;
    })
  }

  AtualizarUsuario() {
    this.usuarioService.editUser(this.userId, this.userEdit).subscribe(data => {
          this.router.navigate(['gerenciamento-usuarios']);
    })
  }

}
