import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../../active-component.service';

@Component({
  selector: 'app-website-development',
  templateUrl: './website-development.component.html',
  styleUrls: ['./website-development.component.css']
})
export class WebsiteDevelopmentComponent {
  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('website-development');
  }
}
