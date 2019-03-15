import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFormComponent } from './third-form.component';

describe('ThirdFormComponent', () => {
  let component: ThirdFormComponent;
  let fixture: ComponentFixture<ThirdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
