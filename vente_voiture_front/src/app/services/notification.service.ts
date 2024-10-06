import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notification$:Subject<string> = new Subject<string>();
  notification$:Observable<string> = this._notification$.asObservable();
  showNotification(message:string) {
    this._notification$.next(message);
  }

  constructor() { }
}
