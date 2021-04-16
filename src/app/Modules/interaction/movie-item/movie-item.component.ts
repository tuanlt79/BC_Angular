import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any = {};
  //EventEmitter: đối tượng giúp định nghĩa 1 event
  // onSelect là tên event
  // Output: nhận vào event vừa tạo, cung cấp các hàm để đẩy event này lên component cha
  @Output() onSelect = new EventEmitter();
  @Output() onDeleted = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectMovie() {
    // cần đẩy bộ phim vừa click lên component cha (MovieLítComponent)
    //emit: kích hoạt event và đẩy lên component cha
    this.onSelect.emit(this.movie);
  }
  deletedMovie() {
    this.onDeleted.emit(this.movie.id);
  }
}
