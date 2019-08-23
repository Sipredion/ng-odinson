import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OdinCardComponent} from './components/odin-card/odin-card.component';
import {DocsHomeComponent} from './components/docs-home/docs-home.component';
import {OverviewComponent} from './components/overview/overview.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DocsHomeComponent,
        children: [
          {path: 'card', component: OdinCardComponent},
          {path: 'overview', component: OverviewComponent},
          {path: '', pathMatch: 'full', redirectTo: '/docs/overview'}
        ]
      },
      {path: '', pathMatch: 'full', redirectTo: '/docs/home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {
}
