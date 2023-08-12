import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../../active-component.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent {
  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('concert');
  }
}
