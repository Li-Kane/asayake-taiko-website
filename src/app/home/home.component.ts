import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../active-component.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('moveAndShrink', [
      state('start', style({
        transform: 'translate(0, 0) scale(1)'
      })),
      state('end', style({
        transform: 'translate(-100%, -100%) scale(0.8)'
      })),
      transition('start => end', animate('6000ms ease-in-out')),
    ]),
  ]
})

export class HomeComponent implements OnInit {
  constructor(private activeComponentService: ActiveComponentService) {}

  //Need to subtract one for the active carousel div
  numImages = 14 - 1;
  imageUrls = [...Array(this.numImages).keys()].map((key) => `../../assets/carousel/carousel_${key+1}.webp`);

  animationState = 'start';

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('home');
    setTimeout(() => {
      this.animationState = 'end';
    }, 100);
  }
}
