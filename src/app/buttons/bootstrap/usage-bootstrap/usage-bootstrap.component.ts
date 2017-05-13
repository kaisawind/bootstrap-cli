import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-usage-bootstrap',
  templateUrl: './usage-bootstrap.component.html',
  styleUrls: ['./usage-bootstrap.component.css']
})
export class UsageBootstrapComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
