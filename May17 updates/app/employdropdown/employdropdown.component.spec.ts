import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploydropdownComponent } from './employdropdown.component';

describe('EmploydropdownComponent', () => {
  let component: EmploydropdownComponent;
  let fixture: ComponentFixture<EmploydropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploydropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploydropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
