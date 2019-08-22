import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {BaseButtonComponent} from '../base-button.component';
import {ThemeColorModel} from '../../../../models/theme-color.model';

@Directive({
  selector: '[odnGhostButton]'
})
export class GhostButtonDirective extends BaseButtonComponent implements OnInit {

  @Input() color: ThemeColorModel;
  @Input() isDisabled: boolean;

  constructor(public el: ElementRef<HTMLButtonElement>,
              public renderer: Renderer2) {
    super(el, renderer);
  }

  // @HostListener('mouseenter')
  // hover() {
  //   if (!this.isDisabled) {
  //     super.onHover();
  //   }
  // }
  //
  // @HostListener('mouseleave')
  // unHover() {
  //   super.disableHover();
  // }
  //
  // @HostListener('mousedown')
  // click() {
  //   if (!this.isDisabled) {
  //     super.onMouseClick();
  //   }
  // }
  //
  // @HostListener('mouseup')
  // unClick() {
  //   super.restoreDefault();
  // }
  //
  // @HostListener('focus')
  // focus() {
  //   if (!this.isDisabled) {
  //     super.onFocus();
  //   }
  // }
  //
  // @HostListener('focusout')
  // unFocus() {
  //   super.disableFocus();
  // }

  ngOnInit() {
    super.ngOnInit();
    super.setInitialStyle(`ghost-button-${this.color}`);
  }

}
