import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routePath } from '@core/constans/route.path';
import { GroupsService } from '@core/services/groups.service';
import { PatientsService } from '@core/services/patients.service';
import { Group } from '@shared/types/group.type';
import { Patient } from '@shared/types/patient.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  patients: Patient[] = [];
  groups$: Observable<Group[]> = this.groupService.fetchGroups();
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor(
    private patientsService: PatientsService,
    private groupService: GroupsService,
    private router: Router,
  ) {
    this.patients = this.patientsService.getPatients();
  }

  deleteGroup(): void {
    console.log(this.groups$.pipe(map(groups => groups.find(group => group.id === 2))));
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }
}




