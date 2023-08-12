import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../../active-component.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent {
  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('repertoire');
  }
}
