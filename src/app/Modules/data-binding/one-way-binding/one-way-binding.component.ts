import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  template: `<div class="container">
    <h1>name: {{ name }} - interpolation</h1>
    <h1>title: {{ showTitle() }}</h1>
    <p [innerHTML]="name + ' ' + showTitle()"></p>
    <input value="{{ name }}" />
    <input [value]="name" />
    <img [src]="imgSrc" />
    <img src="{{ imgSrc }}" />
    <button class="btn btn-success" (click)="changeName(tInput.value)">
      set title
    </button>
    <br />
    <input #tInput />
  </div>`,
  styleUrls: ['./one-way-binding.component.scss'],
})
export class OneWayBindingComponent implements OnInit {
  // MVVM: model view view model
  // tat ca thuco tinh cua component la state
  name: string = 'cybersoft';
  showTitle = () => {
    return 'Cybersoft';
  };
  imgSrc: string = 'https://picsum.photos/200/200';
  constructor() {}
  changeName = (value: string) => {
    this.name = value;
  };

  ngOnInit(): void {}
}
