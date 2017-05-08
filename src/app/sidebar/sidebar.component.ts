import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isComponentCollapsed = true;
  isHtmlCollapsed = true;
  isCssCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
