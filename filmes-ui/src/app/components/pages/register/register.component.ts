import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMatchValidator } from '../../../validators/password-match.validators';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  mensagem: string = 'Usuario cadastrado com sucesso';
  flag: boolean = false;

  constructor(private registerService: AuthService) { }

  ngOnInit(): void {
  }

  formRegister = new FormGroup({
    nome: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),

    email: new FormControl('',
      [Validators.required, Validators.email]),

    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),

    senhaConfirmacao: new FormControl('',
      [Validators.required]),
  }, {
    //adicionar a validações customizadas
    validators: [
      PasswordMatchValidator.MatchPassword,
    ]
  });

  get form(): any {
    return this.formRegister.controls;
  }

  onSubmit(): void {
    console.log(this.formRegister.value);

    this.registerService.register(this.formRegister.value)
    .subscribe({
        next:(data: any) => {
          this.flag = true;
          this.formRegister.reset();
        }
    })
  }

}
