import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-usage-buttons',
  templateUrl: './usage-buttons.component.html',
  styleUrls: ['./usage-buttons.component.css']
})
export class UsageButtonsComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
