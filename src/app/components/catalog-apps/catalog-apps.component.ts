import { Component, Input, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-catalog-apps',
  templateUrl: './catalog-apps.component.html',
  styleUrls: ['./catalog-apps.component.scss'],
  animations: [pageAnimation]
})
export class CatalogAppsComponent implements OnInit {
  @Input() categories: Category[];

  constructor() { }

  ngOnInit(): void {
  }
}
