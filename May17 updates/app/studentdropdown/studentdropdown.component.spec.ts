import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdropdownComponent } from './studentdropdown.component';

describe('StudentdropdownComponent', () => {
  let component: StudentdropdownComponent;
  let fixture: ComponentFixture<StudentdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
