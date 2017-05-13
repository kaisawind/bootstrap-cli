import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  public docs: any = DOCS;
  public isShow = false;

  constructor() { }

  ngOnInit() {
  }

  showPhone() {
    this.isShow = !this.isShow;
  }

}
