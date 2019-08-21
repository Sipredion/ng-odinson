import {ModuleWithProviders, NgModule} from '@angular/core';
import {ToolbarModule} from './modules/toolbar/toolbar.module';
import {NgOdinsonService} from './services/ng-odinson.service';
import {CardModule} from './modules/card/card.module';
import {ButtonsModule} from './modules/buttons/buttons.module';


@NgModule({
  declarations: [],
  imports: [
    ToolbarModule,
    CardModule,
    ButtonsModule
  ],
  exports: [
    ToolbarModule,
    CardModule,
    ButtonsModule
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
