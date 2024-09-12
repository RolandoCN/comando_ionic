import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPrincipalPage } from './app-principal.page';

const routes: Routes = [
  {
    path: '',
    component: AppPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPrincipalPageRoutingModule {}
