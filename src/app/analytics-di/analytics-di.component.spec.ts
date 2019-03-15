import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDiComponent } from './analytics-di.component';

describe('AnalyticsDiComponent', () => {
  let component: AnalyticsDiComponent;
  let fixture: ComponentFixture<AnalyticsDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
