import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/services/servicios-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-principal',
  templateUrl: './app-principal.page.html',
  styleUrls: ['./app-principal.page.scss'],
})
export class AppPrincipalPage implements OnInit {
  user:any
  listar:any;
  id:any
  usuario:any
  contrasenia:any
  constructor(private router:Router, private serviciosApiService:ServiciosApiService, private toastController:ToastController) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user)
   }

  ngOnInit() {
    this.loadUsers()
  }
  async toast_sms(msg:any,color:any){
  
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color : color,
      position:'top'
    });
      toast.present();
  }

  logout() {
    localStorage.removeItem('user'); // Elimina los datos del usuario
    this.router.navigate(['/app-login']);
  }

  loadUsers() {
    this.listar=[];
    
    return new Promise(resolve => {
      let body = {
        consulta: 'lista',
        id : this.id, 
        usuario: this.usuario,
        contrasenia: this.contrasenia
      };


      this.serviciosApiService.postData(body, 'test.php').subscribe(data => {
        if(data.error==false){
        for (let lista of data.result) {
          this.listar.push(lista);         
          
        }
        resolve(true);
        
       }
      }); 
    });
  }

  async deleteUser(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
     
      try {
        const body = {
          consulta: 'eliminar',
          id: id
        };
  
        const data = await this.serviciosApiService.postData(body, 'test.php').toPromise();
        var alertpesan = data.msg;
        if (!data.error) {
          this.toast_sms(alertpesan,"success");
          this.loadUsers();
        } else {
          
          this.toast_sms(alertpesan,"danger");
        }
      } catch (error) {
        this.toast_sms("Error en la conexion","danger");
        console.error('Login error:', error);
      }
    }
  }

  editUser(id: number) {
    this.router.navigate(['/users/edit', id]);
  }

  viewUser(id: number) {
    this.router.navigate(['/app-detalle', id]);
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

}
