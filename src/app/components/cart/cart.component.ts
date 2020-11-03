import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [pageAnimation]
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
