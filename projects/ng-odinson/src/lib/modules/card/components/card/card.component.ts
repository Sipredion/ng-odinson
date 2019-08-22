import {Component, Input, OnInit} from '@angular/core';
import {SizeOptionsModel} from '../../../../models/size-options.model';

@Component({
  selector: 'odn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() width?: SizeOptionsModel;
  @Input() height?: SizeOptionsModel;

  constructor() {
  }

  ngOnInit() {
  }

}
