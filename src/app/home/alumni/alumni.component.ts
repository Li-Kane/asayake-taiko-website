import { Component, HostListener} from '@angular/core';
import { ActiveComponentService } from '../../active-component.service';
import { Alumni, alumniArr } from './alumni-data';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent {
  constructor(private activeComponentService: ActiveComponentService) {
  }

  alumnis = alumniArr;
  selectedAlumni:Alumni = this.alumnis[0];
  screenWidth = window.screen.width;
  //activeindex keeps track of selected div even after responsive rerender
  activeIndex = 0;

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('alumni');
  }

  // Updates whether or not years menu should be dropdown
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  onSelect(event: Event, alumni: Alumni) {
    this.selectedAlumni = alumni;
    if(this.screenWidth > 767){
      let target = event.target as Element;
      this.activeIndex = +target.id;
      let menuBtns = document.querySelectorAll(".year-item");
      menuBtns.forEach(function(btn) {
        btn.setAttribute("class", "year-item container-fluid menu-btn");
      });
      target.setAttribute("class", "year-item container-fluid menu-btn active");
    }
  }
}
