import { Component, Input, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  animations: [pageAnimation]
})
export class CatalogListComponent implements OnInit {
  @Input() categories: Category[];

  constructor() { }

  ngOnInit(): void {
  }

}
