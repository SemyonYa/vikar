import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
  animations: [pageAnimation]
})
export class InstallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
