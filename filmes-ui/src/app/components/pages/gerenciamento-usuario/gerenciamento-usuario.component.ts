
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gerenciamento-usuario',
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrls: ['./gerenciamento-usuario.component.css']
})
export class GerenciamentoUsuarioComponent implements OnInit {

  listaUsuario: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsersActive();
  }

  cadastrarUsuario() {
    this.router.navigate(['cadastrar-usuario']);
  }

  deletar(user: User) {
    this.userService.deleteUser(user.id).subscribe(() => {
      console.log("Deletado com sucesso !")
      this.getAllUsersActive();
    });
  }

  getAllUsersActive() {
    this.userService.getAllUsers()
    .subscribe(data => {
      console.log(data);
      this.listaUsuario = data;
    })
  }

  editar(user: User) {
    this.router.navigate(['editar-usuario', user.id]);
  }

}
