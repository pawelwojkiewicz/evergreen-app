import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { routePath } from 'src/app/core/constans/route.path';
import { GroupsService } from 'src/app/core/services/groups.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Group } from 'src/app/shared/types/group.type';
import { Patient } from 'src/app/shared/types/patient.type';

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




