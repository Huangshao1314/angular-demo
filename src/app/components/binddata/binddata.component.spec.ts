import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinddataComponent } from './binddata.component';

describe('BinddataComponent', () => {
  let component: BinddataComponent;
  let fixture: ComponentFixture<BinddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
