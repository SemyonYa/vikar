import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { throttleTime } from 'rxjs/internal/operators';
import { fromEvent } from 'rxjs';

import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [pageAnimation]
})
export class HomeComponent implements OnInit, AfterViewInit {
  loaded = false;
  firstTop: number;
  secondTop: number;

  carouselItemActive: number = 1;
  constructor(private renderer: Renderer2) { }

  @ViewChild('secondImg') secondImgElem: ElementRef;
  @ViewChild('first') firstElem: ElementRef;
  @ViewChild('second') secondElem: ElementRef;
  @ViewChild('third') thirdElem: ElementRef;

  ngOnInit(): void {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(500)
      )
      .subscribe(
        e => {
          console.log('scroll', pageYOffset, e);
        }
      );
    fromEvent(window, 'load')
      .subscribe(
        e => {
          console.log('window loaded');
          this.loaded = true;
        }
      );
    fromEvent(window, 'resize')
      .subscribe(
        e => {
          console.log('window resize');
          this.setTops();
        }
      );
  }

  ngAfterViewInit() {
    console.log(this.secondImgElem);
    // this.renderer.setStyle(this.secondImgElem.nativeElement, 'border', 'solid 3px red');
    this.setTops();
  }

  setTops() {
    this.firstTop = this.firstElem.nativeElement.offsetTop;
    console.log("HomeComponent -> setTops -> this.firstTop", this.firstTop)
    this.secondTop = this.secondElem.nativeElement.offsetTop;
    console.log("HomeComponent -> setTops -> this.secondTop", this.secondTop)
  }

  showCarouselItem(i: number) {
    this.carouselItemActive = i;
  }
}
