import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  // khi component con muốn nhận dữ liệu từ component cha, càn phải khai báo @Input() vảiable-name
  @Input() movies = [];
  selectedMovie: any = null;
  @Output() onDeleted = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectMovie(movie: any) {
    console.log(movie);
    this.selectedMovie = movie;
  }
  deletedMovie(movieID: number) {
    this.onDeleted.emit(movieID);
  }
}
