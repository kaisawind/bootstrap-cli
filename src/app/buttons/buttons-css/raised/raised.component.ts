import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-raised',
  templateUrl: './raised.component.html',
  styleUrls: ['./raised.component.css']
})
export class RaisedComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
