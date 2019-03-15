import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExampleHttpComponent } from './second-example-http.component';

describe('SecondExampleHttpComponent', () => {
  let component: SecondExampleHttpComponent;
  let fixture: ComponentFixture<SecondExampleHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondExampleHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondExampleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
