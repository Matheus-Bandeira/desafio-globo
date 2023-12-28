import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  enpointMovie: string = environment.apiFilme;
  constructor(private httpClient: HttpClient) { }

  saveMovie(movie: any): Observable<Movie> {
      return this.httpClient.post<any>(this.enpointMovie, movie);
  }

  getAllMovies(): Observable<Movie[]> {
      return this.httpClient.get<Movie[]>(this.enpointMovie);
  }

  getById(id: number): Observable<Movie> {
      return this.httpClient.get<Movie>(this.enpointMovie+ "/" + id);
  }
}
