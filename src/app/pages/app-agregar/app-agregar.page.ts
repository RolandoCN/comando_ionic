import { Component, OnInit } from '@angular/core';
import { ServiciosApiService } from 'src/app/services/servicios-api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-agregar',
  templateUrl: './app-agregar.page.html',
  styleUrls: ['./app-agregar.page.scss'],
})
export class AppAgregarPage implements OnInit {
  user: any = {};
  // usuario:any
  // contrasenia:any
  constructor(private router:Router,private serviciosApiService:ServiciosApiService, private toastController:ToastController) { }

  ngOnInit() {
  }
  addUser() {
    let body = { consulta: 'guardar',usuario:this.user.usuario,
      contrasenia: this.user.contrasenia };

    this.serviciosApiService.postData(body, 'test.php').subscribe(data => {
      var alertpesan = data.msg;
      if (data.error === false) {
        this.toast_sms(alertpesan,"success");
        this.router.navigate(['/app-principal'], { queryParams: { reload: 'true' } });
      } else {
        console.error(alertpesan, "error");
      }
    });
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
