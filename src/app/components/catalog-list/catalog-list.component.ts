import { Component, Input, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  animations: [pageAnimation]
})
export class CatalogListComponent implements OnInit {
  @Input() goods: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
