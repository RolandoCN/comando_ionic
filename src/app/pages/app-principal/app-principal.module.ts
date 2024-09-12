import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppPrincipalPageRoutingModule } from './app-principal-routing.module';

import { AppPrincipalPage } from './app-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPrincipalPageRoutingModule
  ],
  declarations: [AppPrincipalPage]
})
export class AppPrincipalPageModule {}
