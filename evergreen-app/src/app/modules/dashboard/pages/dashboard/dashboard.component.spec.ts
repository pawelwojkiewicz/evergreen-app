// import { GroupComponent } from './../../components/group/group.component';

import { LocalStorageService } from 'ngx-webstorage';
// import { Patient } from './../../../../shared/types/patient.type';
import { createComponentFactory, mockProvider, Spectator } from "@ngneat/spectator"
import { DashboardComponent } from "./dashboard.component"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { PatientCardComponent } from '../../components/patient-card/patient-card.component';
import { Directive, Input } from '@angular/core';
import { routePath } from '@core/constans/route.path';

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()'}
})

export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};
  // let patients : Patient[];
  const createComponent = createComponentFactory({
    component: DashboardComponent,
    declarations: [
      RouterLinkDirectiveStub,
      NotificationsComponent,
      PatientCardComponent
    ],
    imports : [
      HttpClientTestingModule
    ],
    providers: [
      LocalStorageService,
      mockProvider(Router, routerSpy)
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    // patients = [
    //   {
    //     id: 1,
    //     name: 'WILLIAMS, Robert Monson',
    //     number: 'NHS 123 567 766',
    //     gender: 'Male',
    //     born: '14-Jul-1956 (39y)',
    //     accessLevel: 'Personal health records'
    //   },
    //   {
    //     id: 2,
    //     name: 'WILLIAMS, Chris Contown',
    //     number: 'NHS 543 323 126',
    //     gender: 'Male',
    //     born: '14-Aug-1984 (40y)',
    //     accessLevel: 'Wellness, GP Records (NHS)'
    //   },
    // ]
  })

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  })

  it('should slice patient items to 2 items', () => {

      const patientCardsComponents = spectator.queryAll(PatientCardComponent);

      expect(patientCardsComponents.length).toEqual(2);
  })

  it('should has one patientCard component per one patient item', () => {

    const patientCardsComponents = spectator.queryAll(PatientCardComponent);

    for(let i=0; i<patientCardsComponents.length; i++) {
      expect(patientCardsComponents[i].patient).toEqual(spectator.component.patients[i]);
    }

  })

  it('should pass patients items to patiendCard component', () => {

    const patientCardsComponents = spectator.queryAll(PatientCardComponent);

    expect(patientCardsComponents[0].patient).toEqual(spectator.component.patients[0]);

  })

  it('should have correct routes when click for links', () => {

    const links = spectator.queryAll('a');

    spectator.click(links[0]);
    spectator.click(links[1]);
    spectator.click(links[2]);
    spectator.click(links[3]);

    const routerLinks = spectator.queryAll(RouterLinkDirectiveStub);

    expect(routerLinks[0].navigatedTo).toEqual(["/", "home", "patients", 1]);
    expect(routerLinks[1].navigatedTo).toEqual(["/", "home", "patients", 2]);
    expect(routerLinks[2].navigatedTo).toEqual(["/", "home", "patients"]);
    expect(routerLinks[3].navigatedTo).toEqual(["/", "home", "groups"]);

  });

  it('should direct to group detail when click app-group item', () => {

    spectator.component.goToGroupDetail(1)

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/',routePath.home, routePath.groups, 1]);
  })
})
