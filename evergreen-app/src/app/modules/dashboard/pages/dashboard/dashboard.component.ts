import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/shared/types/patient.type';
import { Group } from 'src/app/shared/types/group.type';
import { routePath } from 'src/app/core/core/constans/route.path';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  patients: Patient[] = [];
  groups: Group[] = [];
  patientsRoute = ['/', routePath.home, routePath.patients];

  constructor(
    private patientsService: PatientsService,
    private groupsService: GroupsService) {
    this.patients = this.patientsService.getPatients();
    this.groups = this.groupsService.getGroups();
  }

  ngOnInit(): void {
  }

}




