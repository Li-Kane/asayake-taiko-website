import { Component, OnInit } from '@angular/core';
import { ActiveComponentService } from '../active-component.service';
import { gen22 } from './member-data';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{
  constructor(private activeComponentService: ActiveComponentService) {}
  generation22 = gen22;

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('members');
  }
}
