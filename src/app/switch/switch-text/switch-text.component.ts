import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DOCS } from '../docs/docs';

@Component({
  selector: 'app-switch-text',
  templateUrl: './switch-text.component.html',
  styleUrls: ['./switch-text.component.css']
})
export class SwitchTextComponent implements OnInit, AfterViewInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('[name=\'text-switch\']').bootstrapSwitch('onText', 'YES');
    $('[name=\'text-switch\']').bootstrapSwitch('offText', 'NO');
    $('[name=\'text-switch-fontawesome\']').bootstrapSwitch('onText', '<i class="fa fa-car" aria-hidden="true"></i>');
    $('[name=\'text-switch-fontawesome\']').bootstrapSwitch('offText', '<i class="fa fa-balance-scale" aria-hidden="true"></i>');
  }

}
