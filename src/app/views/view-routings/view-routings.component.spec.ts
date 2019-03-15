import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoutingsComponent } from './view-routings.component';

describe('ViewRoutingsComponent', () => {
  let component: ViewRoutingsComponent;
  let fixture: ComponentFixture<ViewRoutingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRoutingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
