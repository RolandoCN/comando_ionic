import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppActualizarPage } from './app-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: AppActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppActualizarPageRoutingModule {}
