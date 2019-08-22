import {Component, Input, OnInit} from '@angular/core';
import {ThemeColorModel} from '../../../../models/theme-color.model';
import {SizeOptionsModel} from '../../../../models/size-options.model';

@Component({
  selector: 'odn-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() color: ThemeColorModel = 'dark';
  @Input() width: SizeOptionsModel = '95';

  constructor() {
  }

  ngOnInit() {
  }

}
