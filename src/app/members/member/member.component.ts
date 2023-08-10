import { Component, Input, ViewChild } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ])
    ])
  ]
})
export class MemberComponent {
  @Input() person: any;
  @ViewChild('cardFront') frontCard: any;
  isFlipped: Boolean = false;


  flipCard(){
    if (this.person.state === "default") {
      console.log(this.person.state);
      this.person.state = "flipped";
      this.isFlipped = true;
    } else {
      console.log(this.person.state);
      this.person.state = "default";
      this.isFlipped = false;
    }
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("cardFront:", this.frontCard);
  }  
}
