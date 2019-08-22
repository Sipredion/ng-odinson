import {ElementRef, OnInit, Renderer2} from '@angular/core';

export abstract class BaseButtonComponent implements OnInit {

  protected constructor(public el: ElementRef<HTMLButtonElement>,
                        public renderer: Renderer2) {
  }

  ngOnInit() {
    this.setBaseStyle();
  }

  private setBaseStyle() {
    this.renderer.addClass(this.el.nativeElement, 'odn-button');
  }

  public setInitialStyle(className: string) {
    this.renderer.addClass(this.el.nativeElement, className);
  }

  public onHover(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', `rgba(${color}, 0.4)`);
  }

  public disableHover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

  public onMouseClick(color: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `inset 0 2px 4px rgba(${color}, 0.4), 0 0 1px rgba(${color}, 0.4)`
    );
  }

  public onFocus() {

  }

  public disableFocus() {

  }

  public restoreDefault() {

  }

}
