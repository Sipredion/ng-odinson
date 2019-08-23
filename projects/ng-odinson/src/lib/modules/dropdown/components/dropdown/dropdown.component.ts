import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ThemeColorModel} from '../../../../models/theme-color.model';
import {DropdownStateModel} from '../../../../models/dropdown-state.model';
import {growShrinkVertical} from '../../../../animations/grow-srhink-vertical.animation';

@Component({
  selector: 'odn-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  // TODO: Fix the animation's choppiness
  animations: [growShrinkVertical]
})
export class DropdownComponent implements OnInit {

  @ViewChild('dropdown', {static: false}) dropdown: ElementRef<HTMLElement>;

  @Input() state: DropdownStateModel;
  @Input() color: ThemeColorModel;

  constructor() {
  }

  ngOnInit() {
  }
}
