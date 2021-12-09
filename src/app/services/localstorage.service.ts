import { Injectable } from '@angular/core';

/**
 * 
 *  Service to add, remove and clear local storage
 */

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
      const item = localStorage.getItem(key);
      if (item === null) return "-1"
      return item
  }

  remove(key: string) {
      localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear()
  }

  constructor() { }
}
