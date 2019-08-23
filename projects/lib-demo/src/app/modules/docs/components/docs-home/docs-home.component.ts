import {Component, OnInit} from '@angular/core';
import {DocsDropdownModel} from '../../models/docs-dropdown.model';

@Component({
  selector: 'app-docs-home',
  templateUrl: './docs-home.component.html',
  styleUrls: ['./docs-home.component.scss']
})
export class DocsHomeComponent implements OnInit {

  docsDropdown: DocsDropdownModel;

  constructor() {
  }

  ngOnInit() {
    this.docsDropdown = new DocsDropdownModel();
  }

  openCloseDropdown(item?: string) {
    if (item) {
      this.docsDropdown[item] === 'open' ?
        this.docsDropdown[item] = 'closed' :
        this.docsDropdown[item] = 'open';
    }

    // close the previously opened dropdown
    Object.keys(this.docsDropdown).forEach(key => {
      if (key !== item) {
        this.docsDropdown[key] = 'closed';
      }
    });
  }
}
