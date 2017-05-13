import { Component, OnInit } from '@angular/core';

import { DOCS } from '../../docs/docs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public docs: any = DOCS;

  constructor() { }

  ngOnInit() {
  }

}
