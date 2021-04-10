import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { HeaderComponent } from './bai-tap-layout/header/header.component';
import { FooterComponent } from './bai-tap-layout/footer/footer.component';
import { ContentComponent } from './bai-tap-layout/content/content.component';
import { SildebarComponent } from './bai-tap-layout/sildebar/sildebar.component';
import { BaiTapLayoutModule } from './Modules/bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';

@NgModule({
  declarations: [
    // những thẻ có thể sử dụng được cho module này
    AppComponent,
    // DemoComponent,
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule, // các module khác muốn sử dụng được trong module này thì phải import
    DataBindingModule,
  ],
  providers: [], // nới chứa các service muốn sử dụng được cho module này khai báo tại đây
  bootstrap: [AppComponent], // các component sử dụng được trong file index.html
})
export class AppModule {}
