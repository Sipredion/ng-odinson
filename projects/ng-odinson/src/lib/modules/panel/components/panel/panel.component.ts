import {Component, Input, OnInit} from '@angular/core';
import {ThemeColorModel} from '../../../../models/theme-color.model';
import {SizeOptionsModel} from '../../../../models/size-options.model';
import {PanelMenuLink} from '../../models/panel-menu-link.model';
import {PanelMenuPosition} from '../../models/panel-menu-position.model';

@Component({
  selector: 'odn-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() color?: ThemeColorModel;
  @Input() height?: SizeOptionsModel;
  @Input() width?: SizeOptionsModel;
  @Input() menuItems?: PanelMenuLink[];
  @Input() menuPosition?: PanelMenuPosition = 'top';

  constructor() {
  }

  ngOnInit() {
  }

}
