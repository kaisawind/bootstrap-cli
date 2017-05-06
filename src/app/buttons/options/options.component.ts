import { Component, OnInit } from '@angular/core';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/usage.md');

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public buttonDoc: string = titleDoc;

  constructor() { }

  ngOnInit() {
  }

}
