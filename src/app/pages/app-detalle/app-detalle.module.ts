import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppDetallePageRoutingModule } from './app-detalle-routing.module';

import { AppDetallePage } from './app-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppDetallePageRoutingModule
  ],
  declarations: [AppDetallePage]
})
export class AppDetallePageModule {}
