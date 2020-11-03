import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  animationTimeout = null;
  menuItemsVisible = false;
  menuBackAnimation = false;

  constructor(private helperService: HelperService) { }

  hideMenu() {
    this.helperService.menuVisible.next(false);
  }

  ngOnInit() {
    this.helperService.menuVisible
      .subscribe(
        v => {
          // if (v) {
          console.log(this.menuBackAnimation);
          this.animationTimeout = null;
          this.animationTimeout = setTimeout(() => {
            this.menuItemsVisible = v;
          }, 500);
          setTimeout(() => {
            this.menuBackAnimation = v;
          }, 10);
          // }
        }
      );
  }

}
