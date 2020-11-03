import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() btnText: string;
  @Output() hide = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  selfHide() {
    this.hide.emit();
  }



}
