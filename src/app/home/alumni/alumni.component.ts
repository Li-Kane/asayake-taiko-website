import { Component, OnInit} from '@angular/core';
import { ActiveComponentService } from '../../active-component.service';
import { Alumni, alumniArr } from './alumni-data';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent {
  constructor(private activeComponentService: ActiveComponentService) {}

  alumnis = alumniArr;
  selectedAlumni:Alumni = this.alumnis[0];

  ngOnInit() {
    this.activeComponentService.setActiveComponentName('alumni');
  }

  public handleMissingImage(event: Event) {
    console.log(event.target);
    (event.target as HTMLImageElement).style.display = 'none';
  }

  onSelect(alumni: Alumni) {
    this.selectedAlumni = alumni;
  }
}
