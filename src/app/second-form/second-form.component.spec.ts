import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFormComponent } from './second-form.component';

describe('SecondFormComponent', () => {
  let component: SecondFormComponent;
  let fixture: ComponentFixture<SecondFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
