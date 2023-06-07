import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimpageComponent } from './adimpage.component';

describe('AdimpageComponent', () => {
  let component: AdimpageComponent;
  let fixture: ComponentFixture<AdimpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdimpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdimpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
