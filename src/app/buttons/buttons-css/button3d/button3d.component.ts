import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-button3d',
  templateUrl: './button3d.component.html',
  styleUrls: ['./button3d.component.css']
})
export class Button3dComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
