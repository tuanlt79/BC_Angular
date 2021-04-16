import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isActive: boolean = false;
  isLoggedIn: boolean = false;
  color: string = 'primary';
  changeColor(env: any) {
    this.color = env.target.value;
  }
  students: any[] = [
    { name: 'Teo', age: 25 },
    { name: 'Ty', age: 23 },
    { name: 'Tun', age: 27 },
  ];
}
