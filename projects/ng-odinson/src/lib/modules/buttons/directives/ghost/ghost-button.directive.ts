import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {BaseButtonComponent} from '../base-button.component';
import {ThemeColorModel} from '../../../../models/theme-color.model';

@Directive({
  selector: '[odnGhostButton]'
})
export class GhostButtonDirective extends BaseButtonComponent implements OnInit {

  @Input() color: ThemeColorModel;

  constructor(public el: ElementRef<HTMLButtonElement>,
              public renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit() {
    super.ngOnInit();
    super.setInitialStyle(`ghost-button-${this.color}`);
  }

}
