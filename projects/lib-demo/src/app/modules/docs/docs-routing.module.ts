import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OdinCardComponent} from './components/odin-card/odin-card.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'card', component: OdinCardComponent},
      {path: '', pathMatch: 'full', redirectTo: '/docs/card'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {
}
