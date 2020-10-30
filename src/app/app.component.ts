import { Component } from '@angular/core';
import { menuAnimation } from './animations/menu.animation';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [menuAnimation]
})
export class AppComponent {
  title = 'vikar';
  menuVisible: boolean;

  constructor(private helperService: HelperService) {
    helperService.init();

    helperService.menuVisible
      .subscribe(
        v => {
          this.menuVisible = v;
        }
      );
  }
}
