import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
