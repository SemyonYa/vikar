import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [pageAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
