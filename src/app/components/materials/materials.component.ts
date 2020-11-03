import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
  animations: [pageAnimation]
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
