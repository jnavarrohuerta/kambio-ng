import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/model/moneda';
import { Operacion } from 'src/app/model/operacion';
import { ListarService } from 'src/app/service/listar.service';
import { TipoCambioService } from 'src/app/service/tipo-cambio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  monedas: Moneda[];
  moneda1: Moneda;
  moneda2: Moneda;
  operacion: Operacion;
  mensaje: String;
  show: boolean;

  constructor(private service:ListarService, private service1:TipoCambioService, private router:Router) { 
    this.monedas = [];
    this.moneda1 = new Moneda();
    this.moneda2 = new Moneda();
    this.operacion = new Operacion();
    this.mensaje = '';
    this.show = false;
  }

  ngOnInit(): void {
    this.service.getMonedas()
    .subscribe(data=>{
      this.monedas = data;
      this.operacion.monto = 1;
      this.moneda1 = this.monedas.find(m=>m.id == 1) || new Moneda();
      this.moneda2 = this.monedas.find(m=>m.id == 2) || new Moneda();
      this.calcularTipoCambio();
    })
  }

  calcularTipoCambio(){
    console.log(this.operacion);
    this.operacion.idMoneda1 = this.moneda1.id;
    this.operacion.idMoneda2 = this.moneda2.id;
    this.service1.calcularTipoCambio(this.operacion)
    .subscribe(data=>{
      this.operacion=data;
      this.show = true;
    })
  }

  changeMoneda(moneda: Moneda){
    this.show = false;
  }

}
