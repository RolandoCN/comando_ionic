import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAgregarPage } from './app-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: AppAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAgregarPageRoutingModule {}
