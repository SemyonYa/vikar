import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [pageAnimation]
})
export class CatalogComponent implements OnInit {
  isList: boolean = true;
  goods: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five'
  ];
  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {

  }

  toggleView(v: boolean) {
    this.isList = v;
  }

}
