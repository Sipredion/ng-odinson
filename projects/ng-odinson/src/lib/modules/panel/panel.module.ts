import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelComponent} from './components/panel/panel.component';
import {PanelBodyComponent} from './components/panel-body/panel-body.component';
import {PanelHeaderComponent} from './components/panel-header/panel-header.component';
import {PanelFooterComponent} from './components/panel-footer/panel-footer.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    PanelComponent,
    PanelBodyComponent,
    PanelHeaderComponent,
    PanelFooterComponent,
    PanelMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
