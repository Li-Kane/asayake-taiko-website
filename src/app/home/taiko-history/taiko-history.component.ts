import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../../active-component.service';

@Component({
  selector: 'app-taiko-history',
  templateUrl: './taiko-history.component.html',
  styleUrls: ['./taiko-history.component.css']
})
export class TaikoHistoryComponent {
  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('taiko-history');
  }
}
