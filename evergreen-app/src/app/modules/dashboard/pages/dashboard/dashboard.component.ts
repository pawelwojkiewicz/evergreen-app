import { Component, EventEmitter, Output } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/shared/types/patient.type';
import { Group } from 'src/app/shared/types/group.type';
import { routePath } from 'src/app/core/constans/route.path';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  patients: Patient[] = [];
  groups: Group[] = [];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor (
    private patientsService: PatientsService,
    private groupsService: GroupsService,
    private router: Router
  ) {
    this.patients = this.patientsService.getPatients();
    this.groups = this.groupsService.getGroups();
  }

  goToGroupDetail(i: number) {
    this.router.navigate(['/', routePath.home, routePath.groups, i]);
  }
}




