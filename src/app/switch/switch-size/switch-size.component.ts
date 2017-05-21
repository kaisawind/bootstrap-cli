import { Component, OnInit } from '@angular/core';

import { DOCS } from '../docs/docs';

@Component({
  selector: 'app-switch-size',
  templateUrl: './switch-size.component.html',
  styleUrls: ['./switch-size.component.css']
})
export class SwitchSizeComponent implements OnInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
    $('[name=\'size-switch-large\']').bootstrapSwitch();
    $('[name=\'size-switch\']').bootstrapSwitch();
    $('[name=\'size-switch-small\']').bootstrapSwitch();
    $('[name=\'size-switch-mini\']').bootstrapSwitch();
  }

}
