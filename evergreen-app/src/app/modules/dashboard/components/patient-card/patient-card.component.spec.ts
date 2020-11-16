import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientCardComponent } from './patient-card.component';

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

  it('should have patient name in span tag', waitForAsync(() => {
    fixture.detectChanges();
    expect(span[0].innerText).toEqual(component.patient.name);
  }));
});
