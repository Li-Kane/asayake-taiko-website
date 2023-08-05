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

    //const myCarouselElement = document.querySelector('#myCarousel')

    //myCarouselElement.bootstrap.cycle();

    const testFolder = '../../assets/carousel';
    //const fs = require('fs');

    //fs.readdirSync(testFolder).forEach(file => {
     // console.log(file);
    //})
  }
}
