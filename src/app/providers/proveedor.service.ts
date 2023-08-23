import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
	private URL: string = 'http://localhost:3000/rest/cliente/findAll/json';
  private URL2: string='http://localhost:3000/rest/cliente/findAllPedidosById/';
  constructor(private http:HttpClient) { }
getResponse() {
          return this.http.get(this.URL);
      }
getResponseId(clienteid: string){
  
  return this.http.get(this.URL2+clienteid+'/json');
}
}
