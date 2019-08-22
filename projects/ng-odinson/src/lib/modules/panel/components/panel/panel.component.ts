import {Component, Input, OnInit} from '@angular/core';
import {ThemeColorModel} from '../../../../models/theme-color.model';
import {SizeOptionsModel} from '../../../../models/size-options.model';

@Component({
  selector: 'odn-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() color?: ThemeColorModel;
  @Input() height?: SizeOptionsModel;
  @Input() width?: SizeOptionsModel;

  constructor() {
  }

  ngOnInit() {
  }

}
