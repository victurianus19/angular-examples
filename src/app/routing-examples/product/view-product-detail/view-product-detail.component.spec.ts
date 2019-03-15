import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailComponent } from './view-product-detail.component';

describe('ViewProductDetailComponent', () => {
  let component: ViewProductDetailComponent;
  let fixture: ComponentFixture<ViewProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
