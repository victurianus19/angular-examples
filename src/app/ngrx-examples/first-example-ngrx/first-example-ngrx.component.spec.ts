import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExampleNgrxComponent } from './first-example-ngrx.component';

describe('FirstExampleNgrxComponent', () => {
  let component: FirstExampleNgrxComponent;
  let fixture: ComponentFixture<FirstExampleNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstExampleNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExampleNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
