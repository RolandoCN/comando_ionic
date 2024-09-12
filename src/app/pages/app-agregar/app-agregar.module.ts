import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAgregarPageRoutingModule } from './app-agregar-routing.module';

import { AppAgregarPage } from './app-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAgregarPageRoutingModule
  ],
  declarations: [AppAgregarPage]
})
export class AppAgregarPageModule {}
