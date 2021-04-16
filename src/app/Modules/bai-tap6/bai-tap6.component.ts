import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap6',
  templateUrl: './bai-tap6.component.html',
  styleUrls: ['./bai-tap6.component.scss'],
})
export class BaiTap6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  form: any = {
    maSP: '',
    tenSP: '',
    giaSP: '',
  };
  total: number = 0;
  products: any[] = [];
  addProduct() {
    console.log(this.form);
    this.products.push({ ...this.form });
    this.total = this.products.reduce((total, product) => {
      return (total += +product.giaSP);
    }, 0);
  }
}
