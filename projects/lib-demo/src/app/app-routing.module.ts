import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './modules/public/components/landing/landing.component';


const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'docs', loadChildren: () => import('./modules/docs/docs.module').then(m => m.DocsModule)},
  {path: '', pathMatch: 'full', redirectTo: '/landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
