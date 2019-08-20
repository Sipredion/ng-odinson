import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'odn-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() role?: string;

  constructor() {
  }

  ngOnInit() {
  }

}
