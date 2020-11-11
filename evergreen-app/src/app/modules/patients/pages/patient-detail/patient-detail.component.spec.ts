import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailComponent } from './patient-detail.component';
import { RouterModule } from '@angular/router';

describe('PatientDetailComponent', () => {
  let component: PatientDetailComponent;
  let fixture: ComponentFixture<PatientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDetailComponent],
      imports: [
        RouterModule.forRoot([]),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
