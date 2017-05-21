import { Component, OnInit } from '@angular/core';

import { DOCS } from '../docs/docs';

@Component({
  selector: 'app-switch-colors',
  templateUrl: './switch-colors.component.html',
  styleUrls: ['./switch-colors.component.css']
})
export class SwitchColorsComponent implements OnInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
    $('[name=\'colors-switch-primary\']').bootstrapSwitch();
    $('[name=\'colors-switch-info\']').bootstrapSwitch();
    $('[name=\'colors-switch-success\']').bootstrapSwitch();
    $('[name=\'colors-switch-warning\']').bootstrapSwitch();
    $('[name=\'colors-switch-danger\']').bootstrapSwitch();
  }

}
