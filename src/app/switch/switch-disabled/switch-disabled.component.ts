import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DOCS } from '../docs/docs';

@Component({
  selector: 'app-switch-disabled',
  templateUrl: './switch-disabled.component.html',
  styleUrls: ['./switch-disabled.component.css']
})
export class SwitchDisabledComponent implements OnInit, AfterViewInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('[name=\'disabled-switch-true\']').bootstrapSwitch();
    $('[name=\'disabled-switch-false\']').bootstrapSwitch();
  }

}
