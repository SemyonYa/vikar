import { Component } from '@angular/core';
import { backAnimation} from './animations/back.animation';
import { menuAnimation } from './animations/menu.animation';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [menuAnimation, backAnimation]
})
export class AppComponent {
  title = 'vikar';
  menuVisible: boolean;
  backVisible: boolean;

  constructor(private helperService: HelperService) {
    helperService.init();

    helperService.menuVisible
      .subscribe(
        v => {
          this.menuVisible = v;
          this.backVisible = v;
        }
      );
  }

  hideMenu() {
    this.helperService.menuVisible.next(false);
  }
}
