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
  showEnlarged = false;
  public imgSrc = "../../assets/icons/asa_icon.png";

  constructor(private activeComponentService: ActiveComponentService) {}

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('media');
  }

  public displayEnlarged(event: Event) {
    let target = event.target as Element;
    this.showEnlarged = true;
    this.imgSrc = target.getAttribute("src")!;
  }

  public closeEnlarged(){
    this.showEnlarged = false;
  }
    
}
