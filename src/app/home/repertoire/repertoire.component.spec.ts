import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoireComponent } from './repertoire.component';

describe('RepertoireComponent', () => {
  let component: RepertoireComponent;
  let fixture: ComponentFixture<RepertoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepertoireComponent]
    });
    fixture = TestBed.createComponent(RepertoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
