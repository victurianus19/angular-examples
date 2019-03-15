import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleExampleHttpComponent } from './simple-example-http.component';

describe('SimpleExampleHttpComponent', () => {
  let component: SimpleExampleHttpComponent;
  let fixture: ComponentFixture<SimpleExampleHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleExampleHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleExampleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
