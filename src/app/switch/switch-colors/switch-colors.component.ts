import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DOCS } from '../docs/docs';

@Component({
  selector: 'app-switch-colors',
  templateUrl: './switch-colors.component.html',
  styleUrls: ['./switch-colors.component.css']
})
export class SwitchColorsComponent implements OnInit, AfterViewInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('[name=\'colors-switch-primary\']').bootstrapSwitch('onColor', 'primary');
    $('[name=\'colors-switch-info\']').bootstrapSwitch('onColor', 'info');
    $('[name=\'colors-switch-success\']').bootstrapSwitch('onColor', 'success');
    $('[name=\'colors-switch-warning\']').bootstrapSwitch('onColor', 'warning');
    $('[name=\'colors-switch-danger\']').bootstrapSwitch('onColor', 'danger');
  }

}
