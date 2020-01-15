import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() btnLabel: string;
@Input() btnClass: string;


@Output() clickButton = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.clickButton.emit();
  }

}
