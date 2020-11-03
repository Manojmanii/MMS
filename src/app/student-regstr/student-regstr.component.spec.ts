import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegstrComponent } from './student-regstr.component';

describe('StudentRegstrComponent', () => {
  let component: StudentRegstrComponent;
  let fixture: ComponentFixture<StudentRegstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
