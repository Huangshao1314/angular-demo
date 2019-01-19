import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostJsonpAxiosComponent } from './get-post-jsonp-axios.component';

describe('GetPostJsonpAxiosComponent', () => {
  let component: GetPostJsonpAxiosComponent;
  let fixture: ComponentFixture<GetPostJsonpAxiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPostJsonpAxiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostJsonpAxiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
