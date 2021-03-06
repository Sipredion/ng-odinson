import {ModuleWithProviders, NgModule} from '@angular/core';
import {ToolbarModule} from './modules/toolbar/toolbar.module';
import {NgOdinsonService} from './services/ng-odinson.service';
import {CardModule} from './modules/card/card.module';
import {ButtonsModule} from './modules/buttons/buttons.module';
import {AlertModule} from './modules/alert/alert.module';
import {PanelModule} from './modules/panel/panel.module';
import {FloatingMenuModule} from './modules/floating-menu/floating-menu.module';
import {DropdownModule} from './modules/dropdown/dropdown.module';
import {UtilsModule} from './modules/utils/utils.module';
import {ModalModule} from './modules/modal/modal.module';


@NgModule({
  declarations: [],
  imports: [
    ToolbarModule,
    CardModule,
    ButtonsModule,
    AlertModule,
    PanelModule,
    FloatingMenuModule,
    DropdownModule,
    UtilsModule,
    ModalModule
  ],
  exports: [
    ToolbarModule,
    CardModule,
    ButtonsModule,
    AlertModule,
    PanelModule,
    FloatingMenuModule,
    DropdownModule,
    UtilsModule,
    ModalModule
  ],
  providers: [NgOdinsonService]
})
export class NgOdinsonModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: NgOdinsonModule,
      providers: [
        NgOdinsonService,
        {provide: 'config', useValue: config}
      ]
    };
  }
}
