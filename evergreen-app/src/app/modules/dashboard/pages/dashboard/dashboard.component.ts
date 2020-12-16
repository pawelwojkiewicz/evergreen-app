import { Component, EventEmitter, Output } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/shared/types/patient.type';
import { Group } from 'src/app/shared/types/group.type';
import { routePath } from 'src/app/core/constans/route.path';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  patients: Patient[] = [];
  groups$: Observable<Group[]> = this.groupService.getFilteredGroups();
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor(
    private patientsService: PatientsService,
    private groupService: GroupsService,
    private router: Router,
  ) {
    this.patients = this.patientsService.getPatients();
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }
}




