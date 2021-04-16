import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directves',
  templateUrl: './attribute-directves.component.html',
  styleUrls: ['./attribute-directves.component.scss'],
})
export class AttributeDirectvesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isActive: boolean = false;
  color: string = 'red';
  imgSrc: string = 'https://picsum.photos/200/200';
  html: string = `<div class="alert alert-danger">
  <span>Errors</span></div>`;
}
