import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldetailesComponent } from './fulldetailes.component';

describe('FulldetailesComponent', () => {
  let component: FulldetailesComponent;
  let fixture: ComponentFixture<FulldetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulldetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulldetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
