import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }


  formMovie = new FormGroup({
    nome: new FormControl('',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),

    descricao: new FormControl('',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),

    urlImagem: new FormControl('',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),

    diretor: new FormControl('',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),

    genero: new FormControl('',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),

    atores: new FormControl('',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
  });

  get form(): any {
    return this.formMovie.controls;
  }

  onSubmit() {

      this.movieService.saveMovie(this.formMovie.value).subscribe(data => {
          this.router.navigate(['listagem-filmes']);
      })
  }

}
