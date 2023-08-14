import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../active-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('home');
  }

  resetPosition() {
    let myDiv = document.getElementById("concert-container");
    if (myDiv === null) {
      alert('oops');
    } else {
      myDiv.scrollTop = 0;
    }
  }
}
