import {DropdownStateModel} from '../../../../../../ng-odinson/src/lib/models/dropdown-state.model';

export class DocsDropdownModel {

  form: DropdownStateModel;
  elements: DropdownStateModel;
  components: DropdownStateModel;

  constructor(options?: any) {
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      });
    }
  }

}
