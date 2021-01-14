import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GroupsService } from '@core/services/groups.service';
import { PatientsService } from '@core/services/patients.service';
import { Group } from '@shared/types/group.type';
import { Patient } from '@shared/types/patient.type';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // We create let's for our query element
  let h1: HTMLHeadingElement;
  let h2: HTMLHeadingElement;
  let links: HTMLLinkElement;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        RouterModule.forRoot([]),
        RouterTestingModule.withRoutes(
          [
            { path: 'patients', component: DummyComponent },
            { path: 'groups', component: DummyComponent }
          ]
        )
      ],

      // We use mock service
      providers: [
        // I overwrite orginal Service with mu Stub Class.
        { provide: PatientsService, useClass: PatientsServiceStub },
        { provide: GroupsService, useClass: GroupsServiceStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);

    // We query elements which we need
    h1 = fixture.nativeElement.querySelector('h1');
    h2 = fixture.nativeElement.querySelectorAll('h2');
    links = fixture.nativeElement.querySelectorAll('a');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // My tests

  it(`should contain an h1 tag with 'Dashboard' text`, () => {
    fixture.detectChanges();
    expect(h1.innerText).toEqual('Dashboard');
  });
  it(`should contain an h2 tag with 'Last visited patients' text`, () => {
    fixture.detectChanges();
    expect(h2[0].innerText).toEqual('Last visited patients');
  });
  it(`should contain an h2 tag with 'Last groups' text`, () => {
    fixture.detectChanges();
    expect(h2[1].innerText).toEqual('Last groups');
  });
  it(`should contain an anchor tag with 'See all patients' text`, () => {
    fixture.detectChanges();
    expect(links[0].innerText).toEqual('See all patients');
  });
  it(`should contain an anchor tag with 'See all groups' text`, () => {
    fixture.detectChanges();
    expect(links[1].innerText).toEqual('See all groups');
  });
  it('should show one patient card item', () => {
    component.patients = [
      {
        id: 1,
        name: 'WILLIAMS, Robert Monson',
        number: 'NHS 123 567 766',
        gender: 'Male',
        born: '14-Jul-1956 (39y)',
        accessLevel: 'Personal health records'
      }
    ];
    fixture.detectChanges();
    const patientsList = fixture.nativeElement.querySelectorAll('app-patient-card');
    expect(patientsList.length).toBe(1);
  });
  it('should show one group item', () => {
    component.groups = [
      {
        id: 1,
        name: 'Female Diabetics',
        gender: 'Female',
        age: 30,
        medication: 'Metmorfin',
        hapiness: '8-10'
      },
    ];
    fixture.detectChanges();
    const groupsList = fixture.nativeElement.querySelectorAll('app-group');
    expect(groupsList.length).toBe(1);
  });
  it('create 20 items but show only 4', waitForAsync(() => {
    const patients: Patient[] = [];

    for (let i = 0; i < 20; i++) {
      const patient = {
        id: 1,
        name: 'test',
        number: 'test123',
        gender: 'male',
        born: '12-13',
        accessLevel: 'Health Status'
      };
      patients.push(patient);
    }
    component.patients = patients;
    fixture.detectChanges();
    const patientsItems = fixture.nativeElement.querySelectorAll('app-patient-card');
    expect(patientsItems.length).toEqual(4);
  }));
  // it(`should redirect to 'home/patients' after click 'See all patients' anchor`, () => {
  //   links[0].click();
  //   fixture.detectChanges();
  //   fixture.whenStable().then(
  //     () => {
  //       expect(location.path()).toBe('/patients');
  //     }
  //   );
  // });
  // it(`should redirect to 'home/groups' after click 'See all groups' anchor`, () => {
  //   links[1].click();
  //   fixture.detectChanges();
  //   fixture.whenStable().then(
  //     () => {
  //       expect(location.path()).toBe('/groups');
  //     }
  //   );
  // });
});


@Component({ template: '' })
class DummyComponent { }


// We create Stub Classes

class PatientsServiceStub {
  // In future there will be observable return of([]);
  getPatients(): Patient[] {
    return [];
  }
}

class GroupsServiceStub {
  getGroups(): Group[] {
    return [];
  }
}
