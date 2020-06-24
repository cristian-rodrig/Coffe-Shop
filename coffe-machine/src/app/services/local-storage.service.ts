import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import { Observable } from 'rxjs';
import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  public setItem<T>(key: string, value: T): Observable<T> {
    return from(localforage.setItem(key, value));
  }

  public getItem<T>(key: string): Observable<any> {
      return from(localforage.getItem(key));
  }

  public removeItem(key: string): Observable<void> {
      return from(localforage.removeItem(key));
  }

}
