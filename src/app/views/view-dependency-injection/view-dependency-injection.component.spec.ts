import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDependencyInjectionComponent } from './view-dependency-injection.component';

describe('ViewDependencyInjectionComponent', () => {
  let component: ViewDependencyInjectionComponent;
  let fixture: ComponentFixture<ViewDependencyInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDependencyInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
