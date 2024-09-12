import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'app-login',
    loadChildren: () => import('./pages/app-login/app-login.module').then( m => m.AppLoginPageModule)
  },
  {
    path: 'app-principal',
    loadChildren: () => import('./pages/app-principal/app-principal.module').then( m => m.AppPrincipalPageModule), canActivate: [AuthGuard]
  },
  {
    // path: 'app-detalle',
    path: 'app-detalle/:id',
    loadChildren: () => import('./pages/app-detalle/app-detalle.module').then( m => m.AppDetallePageModule)
  },
  {
    path: 'app-agregar',
    loadChildren: () => import('./pages/app-agregar/app-agregar.module').then( m => m.AppAgregarPageModule)
  },
  {
    path: 'app-actualizar/:id',
    loadChildren: () => import('./pages/app-actualizar/app-actualizar.module').then( m => m.AppActualizarPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
