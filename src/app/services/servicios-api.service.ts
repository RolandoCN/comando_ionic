import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {
  server: string = 'http://192.168.1.18:81/PHP/';
  constructor(private httpClient:HttpClient) { }

  postData(body:any, file:any): Observable<any> {
    const url = this.server + file;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});
    const options = { headers, useUntrusted: true };
   
    return this.httpClient.post(url, JSON.stringify(body),  options)
            .pipe(map((res: any) => res));
  }
}
