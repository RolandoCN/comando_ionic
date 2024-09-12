// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    var isAuthenticated =false
    // Verifica si hay un usuario en localStorage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user.id)
    // isAuthenticated =user.id;
    if(user.id){
      isAuthenticated =true
    }

    if (isAuthenticated==false) {
      this.router.navigate(['/app-login']); // Redirige a la página de login si no está autenticado
    }

    return isAuthenticated;
  }
}
