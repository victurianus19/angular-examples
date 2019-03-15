import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthFormComponent } from './fourth-form.component';

describe('FourthFormComponent', () => {
  let component: FourthFormComponent;
  let fixture: ComponentFixture<FourthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
