import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  movieId: number = 0;
  movie: Movie = new Movie();

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log(this.movieId);
    });

    this.movieService.getById(this.movieId).subscribe(data => {
      console.log(data);
      this.movie = data;
    })
  }

}
