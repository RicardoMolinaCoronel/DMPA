import { Component } from '@angular/core';
//Importación de la interfaz
import { Cliente } from '../../interfaces/cliente';
import { Pedido } from '../../interfaces/pedido';
//Importación del servicio
import { ProveedorService } from '../../providers/proveedor.service';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  constructor(private dataProvider: ProveedorService) { }
  public dataC : Cliente[] = [];
  public dataP : Pedido[] = [];
  public opcion : string=''; 
  public opcionSeleccionada: string  = '0';
  displayedColumns: string[] = ['idpedido', 'fechahora', 'estado'];
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.dataC = (response as Cliente[]); 
    })
}
filtrar(){
  this.opcion=this.opcionSeleccionada;
  this.dataProvider.getResponseByClientId(this.opcion).subscribe((response) => { 
    this.dataP = (response as Pedido[]); 
  })
}
}
