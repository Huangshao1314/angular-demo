import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs6Component } from './rxjs6.component';

describe('Rxjs6Component', () => {
  let component: Rxjs6Component;
  let fixture: ComponentFixture<Rxjs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rxjs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
