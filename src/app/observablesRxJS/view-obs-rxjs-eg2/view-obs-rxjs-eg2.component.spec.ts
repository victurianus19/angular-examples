import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObsRxjsEg2Component } from './view-obs-rxjs-eg2.component';

describe('ViewObsRxjsEg2Component', () => {
  let component: ViewObsRxjsEg2Component;
  let fixture: ComponentFixture<ViewObsRxjsEg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewObsRxjsEg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewObsRxjsEg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
