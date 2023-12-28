import { MovieService } from '../../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { Authentication } from 'src/app/models/authentication.model';
import { Movie } from 'src/app/models/movie.model';
import { ERole } from 'src/app/role.enum';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.css']
})
export class ListagemFilmesComponent implements OnInit {


  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService,
              private router: Router,
              private helper: AuthenticationHelper) {

                console.log("xxxxxx " + this.filteredMovies);
              }

  ngOnInit(): void {
      this.movieService.getAllMovies().subscribe(data => {
          console.log(data);
          this.movies = data;
      });

      this.isAdmin();

  }

  detalhar(movie: Movie) {
    this.router.navigate(['detalhes-filmes', movie.id]);
  }

  cadastrar() {
    this.router.navigate(['cadastrar-filmes']);
  }

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

  isRoleUser(): boolean {
    const userLogado = this.helper.get();
    var roles = userLogado?.roles;

    if (roles) {
      for (const role of roles) {
        if (role === 'ROLE_USER') {
          return true; // Se a role for ROLE_ADMIN, retorna true imediatamente
        }
      }
    }
    return false;

  }

  searchMovies(event: Event) {
    const query = (event.target as HTMLInputElement).value.trim();
    if (query === '') {
      this.filteredMovies = [...this.movies];
    } else {
      this.filteredMovies = this.movies.filter(movie =>
        movie.nome.toLowerCase().includes(query.toLowerCase())
      );
      console.log(this.filteredMovies)
    }
  }

}
