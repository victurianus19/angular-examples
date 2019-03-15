import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsExampleNgrxComponent } from './operations-example-ngrx.component';

describe('OperationsExampleNgrxComponent', () => {
  let component: OperationsExampleNgrxComponent;
  let fixture: ComponentFixture<OperationsExampleNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsExampleNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsExampleNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
