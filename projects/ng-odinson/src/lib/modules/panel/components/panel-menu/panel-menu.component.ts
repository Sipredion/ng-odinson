import {Component, Input, OnInit} from '@angular/core';
import {PanelMenuLink} from '../../models/panel-menu-link.model';

@Component({
  selector: 'odn-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss']
})
export class PanelMenuComponent implements OnInit {

  @Input() menuItems: PanelMenuLink[];

  constructor() {
  }

  ngOnInit() {
  }

}
