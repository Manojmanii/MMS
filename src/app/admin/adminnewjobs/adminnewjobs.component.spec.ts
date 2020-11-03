import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewjobsComponent } from './adminnewjobs.component';

describe('AdminnewjobsComponent', () => {
  let component: AdminnewjobsComponent;
  let fixture: ComponentFixture<AdminnewjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnewjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
