import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-samplebox',
  templateUrl: './samplebox.component.html',
  styleUrls: ['./samplebox.component.css']
})
export class SampleboxComponent implements OnInit {

  @Input() public ts: string;
  @Input() public html: string;
  @Input() public spec: string;
  @Input() public style: string;

  constructor() { }

  ngOnInit() {
  }

}
