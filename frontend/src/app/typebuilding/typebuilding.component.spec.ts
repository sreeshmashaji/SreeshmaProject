import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypebuildingComponent } from './typebuilding.component';

describe('TypebuildingComponent', () => {
  let component: TypebuildingComponent;
  let fixture: ComponentFixture<TypebuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypebuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypebuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
