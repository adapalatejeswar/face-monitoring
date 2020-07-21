import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamcompleteComponent } from './examcomplete.component';

describe('ExamcompleteComponent', () => {
  let component: ExamcompleteComponent;
  let fixture: ComponentFixture<ExamcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
