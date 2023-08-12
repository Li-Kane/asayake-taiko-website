import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikoHistoryComponent } from './taiko-history.component';

describe('TaikoHistoryComponent', () => {
  let component: TaikoHistoryComponent;
  let fixture: ComponentFixture<TaikoHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaikoHistoryComponent]
    });
    fixture = TestBed.createComponent(TaikoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
