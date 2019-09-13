import {Component, OnInit} from '@angular/core';
import {PanelMenuLink} from '../../../../../../../ng-odinson/src/public-api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  panelMenuItems: PanelMenuLink[];

  constructor() {
  }

  ngOnInit() {
    this.panelMenuItems = [
      {title: 'Demos', isLink: true, path: ''},
      {title: 'Cool shit', isLink: true, path: ''},
      {title: 'Testimonials', isLink: true, path: ''},
    ];
  }

}
