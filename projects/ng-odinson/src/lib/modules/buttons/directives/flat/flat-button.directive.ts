import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {BaseButtonComponent} from '../base-button.component';
import {ThemeColorModel} from '../../../../models/theme-color.model';
import {SizeOptionsModel} from '../../../../models/size-options.model';

@Directive({
  selector: '[odnFlatButton]'
})
export class FlatButtonDirective extends BaseButtonComponent implements OnInit {

  @Input() color: ThemeColorModel = 'primary';
  @Input() width: SizeOptionsModel = '100';

  constructor(public el: ElementRef<HTMLButtonElement>,
              public renderer: Renderer2) {
    super(el, renderer);
  }


  ngOnInit() {
    super.ngOnInit();
    super.setInitialStyle(`flat-button-${this.color}`);
    this.setWidth(this.width);
  }

  private setWidth(width: SizeOptionsModel) {
    this.renderer.addClass(this.el.nativeElement, `w-${this.width}`);
  }
}
