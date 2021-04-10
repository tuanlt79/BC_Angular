import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapLayoutComponent } from 'src/app/bai-tap-layout/bai-tap-layout.component';
import { ContentComponent } from 'src/app/bai-tap-layout/content/content.component';
import { FooterComponent } from 'src/app/bai-tap-layout/footer/footer.component';
import { HeaderComponent } from 'src/app/bai-tap-layout/header/header.component';
import { SildebarComponent } from 'src/app/bai-tap-layout/sildebar/sildebar.component';

@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SildebarComponent,
  ],
  imports: [CommonModule],
  exports: [BaiTapLayoutComponent], //Xuat component ra de khi import module nay vao module khac thì component này có thể sử dụng trong module khác
})
export class BaiTapLayoutModule {}
