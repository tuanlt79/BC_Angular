import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên thẻ <app-root></app-root>
  //template: thành phần giao diện của thẻ
  template: `<div class="container mt-5">
    <!-- <app-demo></app-demo> -->
    <!-- <app-bai-tap-layout></app-bai-tap-layout> -->
    <!-- <app-one-way-binding></app-one-way-binding> -->
    <!-- <app-two-way-binding></app-two-way-binding> -->
    <!-- <app-structural-directives></app-structural-directives> -->
    <!-- <app-attribute-directves></app-attribute-directves> -->
    <!-- <app-bai-tap6></app-bai-tap6> -->
    <app-interaction></app-interaction>
  </div>`,
  styleUrls: ['./app.component.scss'], //đường dẫn đến file css của thẻ
})
//xử lý các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'bc01angular';
}
