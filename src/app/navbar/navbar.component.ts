import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../active-component.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isTransparent: boolean = false;

  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.getActiveComponentName().subscribe(name => {
      this.isTransparent = name === 'home';
    });
  }
}
