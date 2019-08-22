import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelComponent} from './components/panel/panel.component';
import {PanelBodyComponent} from './components/panel-body/panel-body.component';
import {PanelHeaderComponent} from './components/panel-header/panel-header.component';
import {PanelFooterComponent} from './components/panel-footer/panel-footer.component';


@NgModule({
  declarations: [
    PanelComponent,
    PanelBodyComponent,
    PanelHeaderComponent,
    PanelFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    PanelBodyComponent,
    PanelHeaderComponent,
    PanelFooterComponent
  ]
})
export class PanelModule {
}
