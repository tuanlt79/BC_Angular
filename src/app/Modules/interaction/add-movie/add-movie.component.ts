import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  constructor() {}
  @Output() onAdd = new EventEmitter();
  ngOnInit(): void {}
  form: any = {
    name: '',
    description: '',
    image: '',
  };
  handleAddMovie() {
    const id = Math.floor(Math.random() * 100);
    this.onAdd.emit({ ...this.form, id });
  }
}
