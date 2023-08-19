import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
	private URL: string = 'http://localhost:3000/rest/cliente/findAll/json';
  constructor(private http:HttpClient) { }
getResponse() {
          return this.http.get(this.URL);
      }
}
