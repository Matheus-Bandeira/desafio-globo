import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PasswordMatchValidator } from 'src/app/validators/password-match.validators';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private registerService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  formNewUser = new FormGroup({
    nome: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),

    email: new FormControl('',
      [Validators.required, Validators.email]),

    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),

    senhaConfirmacao: new FormControl('',
      [Validators.required]),

    roles: new FormControl('', [Validators.required])
  }, {
    //adicionar a validações customizadas
    validators: [
      PasswordMatchValidator.MatchPassword,
    ]
  });

  onSubmit(): void {
    this.registerService.register(this.formNewUser.value)
    .subscribe({
        next: (data: any) => {
          this.formNewUser.reset()
          this.router.navigate(['gerenciamento-usuarios']);
        }
    })
  }

}
