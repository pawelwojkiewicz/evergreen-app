import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: {  name: string, gender: string, age: number, medication: string, hapiness: string}

  constructor() { }

  ngOnInit(): void {
  }

}
