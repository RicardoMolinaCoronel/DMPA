import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProveedorService {
  headers = new HttpHeaders({
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsInJvbCI6ImFkbWluIiwiaWF0IjoxNjkzNzgxMzQ4fQ.-lgNy0JJ-6ISUnRlMekXpMwoG1X-si_yE-eP9Zn9zVU`
  });
	private URL: string = 'http://localhost:3000/rest/cliente/findAll/json';
  private URL2: string='http://localhost:3000/rest/pedido/findAllPedidosByClientId/';
  constructor(private http:HttpClient) { }
getResponse() {
          return this.http.get(this.URL,{ headers: this.headers });
      }
getResponseByClientId(clienteid: string){
  
  return this.http.get(this.URL2+clienteid+'/json',{ headers: this.headers });
}
}
