import { Component, OnInit } from '@angular/core';
import { ServiciosApiService } from 'src/app/services/servicios-api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-app-detalle',
  templateUrl: './app-detalle.page.html',
  styleUrls: ['./app-detalle.page.scss'],
})
export class AppDetallePage implements OnInit {
  detalle:any
  constructor(private router:Router, private serviciosApiService:ServiciosApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser()
  }

  loadUser() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.detalle=[];
    
    return new Promise(resolve => {
      let body = {
        consulta: 'detalle',
        id : id
      };


      this.serviciosApiService.postData(body, 'test.php').subscribe(data => {
        if(data.error==false){
       // for (let lista of data.result) {
          this.detalle= data.result[0];   
          // console.log(this.detalle[0])      
          //
        // }
        resolve(true);
        
       }
      }); 
    });
  }

}
