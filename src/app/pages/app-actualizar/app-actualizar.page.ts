import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/services/servicios-api.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-app-actualizar',
  templateUrl: './app-actualizar.page.html',
  styleUrls: ['./app-actualizar.page.scss'],
})
export class AppActualizarPage implements OnInit {
  user: any = {};
  usurio_log:any
  isLoading = true;
  constructor( private activatedRoute: ActivatedRoute,
    private serviciosApiService: ServiciosApiService,
    private router: Router, private toastController:ToastController) { 
      this.usurio_log = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.usurio_log)
    }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    let body = { consulta: 'detalle', id: id };

    this.serviciosApiService.postData(body, 'test.php').subscribe(data => {
      if (data.error === false) {
        this.user = data.result[0]; // Asume que el resultado es un array
        console.log("ss")
        console.log(this.user)
      }
      this.isLoading = false;
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

  saveUser() {
    let body = { consulta: 'editar',usuario:this.user.usuario,
      contrasenia: this.user.contrasenia,id: this.user.id  };

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

}
