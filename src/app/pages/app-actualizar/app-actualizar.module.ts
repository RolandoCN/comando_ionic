import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppActualizarPageRoutingModule } from './app-actualizar-routing.module';

import { AppActualizarPage } from './app-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppActualizarPageRoutingModule
  ],
  declarations: [AppActualizarPage]
})
export class AppActualizarPageModule {}
