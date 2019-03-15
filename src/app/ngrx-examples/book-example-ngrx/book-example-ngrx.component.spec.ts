import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExampleNgrxComponent } from './book-example-ngrx.component';

describe('BookExampleNgrxComponent', () => {
  let component: BookExampleNgrxComponent;
  let fixture: ComponentFixture<BookExampleNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookExampleNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExampleNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
