import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiComponent } from './user-di.component';

describe('UserDiComponent', () => {
  let component: UserDiComponent;
  let fixture: ComponentFixture<UserDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
