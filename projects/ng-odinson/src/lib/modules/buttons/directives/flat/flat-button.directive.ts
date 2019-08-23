import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {BaseButtonComponent} from '../base-button.component';
import {ThemeColorModel} from '../../../../models/theme-color.model';
import {SizeOptionsModel} from '../../../../models/size-options.model';

@Directive({
  selector: '[odnFlatButton]'
})
export class FlatButtonDirective extends BaseButtonComponent implements OnInit, OnChanges {

  @Input() color: ThemeColorModel = 'primary';
  @Input() active?: boolean;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['active']) {
      if (changes['active'].currentValue === true) {
        this.renderer.addClass(this.el.nativeElement, `flat-button-active-${this.color}`);
      } else {
        this.renderer.removeClass(this.el.nativeElement, `flat-button-active-${this.color}`);
      }
    }
  }

  private setWidth(width: SizeOptionsModel) {
    this.renderer.addClass(this.el.nativeElement, `w-${this.width}`);
  }
}
