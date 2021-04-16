import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  movies: any[] = [
    { id: 1, name: 'Doraemon', description: 'ABC', image: 'assets/img/1.jpeg' },
    { id: 2, name: 'Conan', description: 'BCA', image: 'assets/img/2.jpeg' },
    {
      id: 3,
      name: 'One puch man',
      description: 'CBA',
      image: 'assets/img/3.jpeg',
    },
  ];
  handleAddMovie(movie: any) {
    this.movies.push(movie);
  }
  handleDeleted(movieID: any) {
    this.movies = this.movies.filter((item) => item.id !== movieID);
  }
}
