import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-layout',
  template: `<div class="container">
    <!-- Bai Tap Layout -->
    <div class="row" >
      <div class="col-12 ">
        <app-header></app-header>
      </div>
      
      
    </div>
    <div class="row">
        <div class="col-8">
          <app-content></app-content>
        </div>
        <div class="col-4">
          <app-sildebar></app-sildebar>
        </div>
        
      </div>
    <div class="row">
        <div class="col-12">
          <app-footer></app-footer>
        </div>
      </div>
  </div>`,
  styleUrls: ['./bai-tap-layout.component.scss'],
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
