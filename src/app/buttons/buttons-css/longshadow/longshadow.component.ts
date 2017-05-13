import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-longshadow',
  templateUrl: './longshadow.component.html',
  styleUrls: ['./longshadow.component.css']
})
export class LongshadowComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
