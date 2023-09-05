import { Component, OnInit } from '@angular/core';
import { ActiveComponentService } from '../active-component.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit{
  numImages = 34;
  preloadImageUrls = [...Array(this.numImages).keys()].map((key) => `../../assets/gallery/gallery${key+1}.jpg`);

  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('media');
  }
}
