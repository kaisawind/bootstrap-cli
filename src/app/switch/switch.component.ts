import { Component, OnInit } from '@angular/core';

import { DOCS } from './docs/docs';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
    $('[name=\'size-switch-large\']').bootstrapSwitch();
    $('[name=\'size-switch\']').bootstrapSwitch();
    $('[name=\'size-switch-small\']').bootstrapSwitch();
    $('[name=\'size-switch-mini\']').bootstrapSwitch();
  }

}
