import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExampleRoutingComponent } from './first-example-routing.component';

describe('FirstExampleRoutingComponent', () => {
  let component: FirstExampleRoutingComponent;
  let fixture: ComponentFixture<FirstExampleRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstExampleRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExampleRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
