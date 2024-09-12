import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiciosApiService } from 'src/app/services/servicios-api.service';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.page.html',
  styleUrls: ['./app-login.page.scss'],
})
export class AppLoginPage implements OnInit {
  email:any
  password:any
  constructor(private router:Router, private toastController:ToastController, private serviciosApiService:ServiciosApiService) { }

  ngOnInit() {
  }

  async onLogin() {
    if (!this.email || !this.password) {
      // this.showToast('Complete los campos', 'danger');
      this.toast_sms('Complete los campos',"danger");
      return;
    }

    try {
      const body = {
        consulta: 'login',
        usuario: this.email,
        contrasenia: this.password
      };

      const data = await this.serviciosApiService.postData(body, 'test.php').toPromise();
      var alertpesan = data.msg;
      if (!data.error) {
        this.toast_sms(alertpesan,"success");
        localStorage.setItem('user', JSON.stringify(data.result[0]));
        console.log(data.result[0])
        this.router.navigate(['/app-principal']);
      } else {
        
        this.toast_sms(alertpesan,"danger");
      }
    } catch (error) {
      this.toast_sms("Error en la conexion","danger");
      console.error('Login error:', error);
    }
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

}
