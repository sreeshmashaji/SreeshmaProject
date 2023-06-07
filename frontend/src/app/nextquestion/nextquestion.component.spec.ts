import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextquestionComponent } from './nextquestion.component';

describe('NextquestionComponent', () => {
  let component: NextquestionComponent;
  let fixture: ComponentFixture<NextquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
