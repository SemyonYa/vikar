import { Component, Input, OnInit } from '@angular/core';
import { Good } from 'src/app/models/good';
import { GoodGroup } from 'src/app/models/good-group';

@Component({
  selector: 'app-catalog-list-item',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.scss']
})
export class CatalogListItemComponent implements OnInit {
  @Input() good: Good;
  @Input() goodGroup: GoodGroup;
  @Input() isLast: boolean;
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
