import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Group } from 'src/app/shared/models/group.model';
import { Patient } from 'src/app/shared/models/patient.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  patients: Patient[] = [];
  groups: Group[] = [];

  constructor(
    private patientsService: PatientsService,
    private groupsService: GroupsService) {
    this.patients = this.patientsService.getPatients();
    this.groups = this.groupsService.getGroups();
  }

  ngOnInit(): void {
  }

}




