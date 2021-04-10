import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên thẻ <app-root></app-root>
  //template: thành phần giao diện của thẻ
  template: `<div>
    Cybersoft
    <!-- <app-demo></app-demo> -->
    <!-- <app-bai-tap-layout></app-bai-tap-layout> -->
    <app-one-way-binding></app-one-way-binding>
  </div>`,
  styleUrls: ['./app.component.scss'], //đường dẫn đến file css của thẻ
})
//xử lý các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'bc01angular';
}
