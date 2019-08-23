import {DropdownStateModel} from '../../../../../../ng-odinson/src/lib/models/dropdown-state.model';

export class DocsDropdownModel {

  components: DropdownStateModel;
  elements: DropdownStateModel;

  constructor(options?: any) {
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      });
    }
  }

}
