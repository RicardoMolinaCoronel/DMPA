import { Component } from '@angular/core';
//Importación de la interfaz
  import { Cliente } from '../../interfaces/cliente';

  //Importación del servicio
  import { ProveedorService } from '../../providers/proveedor.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 constructor(private dataProvider: ProveedorService) { }
displayedColumns: string[] = ['idcliente', 'direccion'];
public data : Cliente[] = [];
ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        this.data = (response as Cliente[]); 
      })


}
}
