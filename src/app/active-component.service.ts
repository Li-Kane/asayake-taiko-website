import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveComponentService {
  private activeComponentName = new BehaviorSubject<string>('');

  public setActiveComponentName(name: string) {
    this.activeComponentName.next(name);
  }

  public getActiveComponentName(): Observable<string> { 
    return this.activeComponentName.asObservable();
  }
}
