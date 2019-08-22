import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OdinCardComponent} from './components/odin-card/odin-card.component';
import {DocsHomeComponent} from './components/docs-home/docs-home.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: DocsHomeComponent},
      {path: 'card', component: OdinCardComponent},
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
