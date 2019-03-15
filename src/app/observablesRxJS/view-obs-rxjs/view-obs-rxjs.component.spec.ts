import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObsRxjsComponent } from './view-obs-rxjs.component';

describe('ViewObsRxjsComponent', () => {
  let component: ViewObsRxjsComponent;
  let fixture: ComponentFixture<ViewObsRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewObsRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewObsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
