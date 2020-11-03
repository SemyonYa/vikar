import { Component, Input, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-catalog-apps',
  templateUrl: './catalog-apps.component.html',
  styleUrls: ['./catalog-apps.component.scss'],
  animations: [pageAnimation]
})
export class CatalogAppsComponent implements OnInit {
  @Input() goods: string[];

  constructor() { }

  ngOnInit(): void {
  }
}
