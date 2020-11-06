import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { throttleTime } from 'rxjs/internal/operators';

import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [pageAnimation]
})
export class HomeComponent implements OnInit {
  scrolling$ = new BehaviorSubject<Event>(null);
  @HostListener('window:scroll', ['$event']) scrollHandler(e: Event) {
    this.scrolling$.next(e);
  }

  constructor() { }

  ngOnInit(): void {
    this.scrolling$
      .pipe(
        throttleTime(1000)
      )
      .subscribe(
        e => {
          console.log('scroll', pageYOffset, e);
        }
      )
  }

}
