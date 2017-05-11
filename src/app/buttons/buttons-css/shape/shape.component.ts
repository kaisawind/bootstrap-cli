import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
