import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/shared/types/patient.type';
import { Group } from 'src/app/shared/types/group.type';
import { routePath } from 'src/app/core/core/constans/route.path';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() routeEvent = new EventEmitter<string[]>();

  patients: Patient[] = [];
  groups: Group[] = [];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups]
  groupRoute: string[];

  constructor(
    private patientsService: PatientsService,
    private groupsService: GroupsService,
    private router: Router) {
    this.patients = this.patientsService.getPatients();
    this.groups = this.groupsService.getGroups();
  }

  ngOnInit(): void {
  }

  goToGroupDetail($event: string[], i :number) {
    this.groupRoute = $event;
    this.groupRoute.push(i.toString());
    this.router.navigate(this.groupRoute);
  }
}




