import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'odn-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss']
})
export class FloatingMenuComponent implements OnInit {

  @Input() title = 'Menu';
  @Input() position: 'left' | 'right' = 'right';

  constructor() {
  }

  ngOnInit() {
  }

}
