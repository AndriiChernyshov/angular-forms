import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent, TemplateFormComponent } from './components';

const routes: Routes = [
  {
    path: 'reactive',
    component: ReactiveFormComponent
  },
  {
    path: 'template',
    component: TemplateFormComponent
  },
  {
    path: '',
    redirectTo: '/reactive',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: ReactiveFormComponent
  }
];

export let appRouterComponents = [ReactiveFormComponent, TemplateFormComponent];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
