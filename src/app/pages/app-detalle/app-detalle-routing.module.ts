import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDetallePage } from './app-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AppDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppDetallePageRoutingModule {}
