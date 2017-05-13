import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-glow',
  templateUrl: './glow.component.html',
  styleUrls: ['./glow.component.css']
})
export class GlowComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
