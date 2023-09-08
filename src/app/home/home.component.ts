import { Component, OnInit, ViewChild} from '@angular/core';
import { ActiveComponentService } from '../active-component.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('moveAndShrink', [
      state('start', style({
        //transform: 'translate(0, 0) scale(1)'
        width: '34%',
        left: '33%',
        top: '8%',
      })),
      state('end', style({
        width: 'calc(80px + 4%)',
        left: '2%',
        top: '2%',
      })),
      transition('start => end', animate('3000ms ease-in-out'))
    ]),
    trigger('leftFlowIn', [
      state('start', style({
        opacity: '0'
      })),
      state('end', style({
        opacity: '1'
      })),
      transition('start => end', animate('1000ms linear'))
    ])
  ]
})

export class HomeComponent implements OnInit {
  constructor(private activeComponentService: ActiveComponentService) {}

  //Need to subtract one for the active carousel div
  numImages = 14 - 1;
  imageUrls = [...Array(this.numImages).keys()].map((key) => `../../assets/carousel/carousel_${key + 1}.webp`);
  @ViewChild("carouselAutoPlaying") carousel?: NgbCarousel;

  //Animation variables
  logoState = 'start';
  textState = 'start';

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('home');
    //Wait a bit so state doesn't change before page is loaded
    this.carousel?.cycle();
    setTimeout(() => {
      this.logoState = 'end';
    }, 4000);
    setTimeout(() => {
      this.textState = 'end';
    }, 7000);
  }
}
