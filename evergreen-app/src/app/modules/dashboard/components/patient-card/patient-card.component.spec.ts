import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientCardComponent } from './patient-card.component';
import { Patient } from 'src/app/shared/types/patient.type';

describe('PatientCardComponent', () => {
  let component: PatientCardComponent;
  let fixture: ComponentFixture<PatientCardComponent>;
  let span: HTMLSpanElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardComponent);
    component = fixture.componentInstance;
    span = fixture.nativeElement.querySelectorAll('span');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show one item', waitForAsync(() => {
    component.patient = {
      id: 1,
      name: 'test',
      number: 'test123',
      gender: 'male',
      born: '12-13',
      accessLevel: 'Health Status'
    };
    fixture.detectChanges();
    const patients = fixture.nativeElement.querySelectorAll('.patient-card');
    expect(patients.length).toEqual(1);
  }));

  it(`should show patient details in span's`, waitForAsync(() => {
    component.patient = {
      id: 1,
      name: 'test',
      number: 'test123',
      gender: 'male',
      born: '12-13',
      accessLevel: 'Health Status'
    };
    fixture.detectChanges();
    const spans = fixture.nativeElement.querySelectorAll('span');
    expect(spans[0].innerText).toEqual(component.patient.name);
    expect(spans[1].innerText).toEqual(component.patient.number);
    expect(spans[3].innerText).toEqual(component.patient.gender);
    expect(spans[5].innerText).toEqual(component.patient.born);
  }));
});
