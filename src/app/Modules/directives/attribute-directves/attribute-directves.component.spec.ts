import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectvesComponent } from './attribute-directves.component';

describe('AttributeDirectvesComponent', () => {
  let component: AttributeDirectvesComponent;
  let fixture: ComponentFixture<AttributeDirectvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
