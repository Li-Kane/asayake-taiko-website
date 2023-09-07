import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = true;

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  isLoading() {
    return this.loading;
  }
}
