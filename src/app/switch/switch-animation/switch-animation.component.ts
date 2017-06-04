import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DOCS } from '../docs/docs';

@Component({
  selector: 'app-switch-animation',
  templateUrl: './switch-animation.component.html',
  styleUrls: ['./switch-animation.component.css']
})
export class SwitchAnimationComponent implements OnInit, AfterViewInit {

  docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('[name=\'animation-switch-false\']').bootstrapSwitch();
    $('[name=\'animation-switch-true\']').bootstrapSwitch();
  }

}
