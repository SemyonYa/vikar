import { Component, Input, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-catalog-apps-item',
  templateUrl: './catalog-apps-item.component.html',
  styleUrls: ['./catalog-apps-item.component.scss']
})
export class CatalogAppsItemComponent implements OnInit {
  @Input() good: string;
  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.value = this.value > 20 ? 20 : this.value + 1;
  }

  minus() {
    this.value = this.value == 0 ? 0 : this.value - 1;
  }

}
