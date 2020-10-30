import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  modalVisible = new BehaviorSubject<boolean>(false);
  menuVisible = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  init() {
    // this.modalVisible.next(false);
    // this.menuVisible.next(false);
  }

  showMenu() {
    this.menuVisible.next(true);
  }

  hideMenu() {
    this.menuVisible.next(false);
  }
}
