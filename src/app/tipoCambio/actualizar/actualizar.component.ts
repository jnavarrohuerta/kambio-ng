import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/model/moneda';
import { TipoCambio } from 'src/app/model/tipoCambio';
import { ListarService } from 'src/app/service/listar.service';
import { TipoCambioService } from 'src/app/service/tipo-cambio.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  tipoCambio: TipoCambio;
  monedas: Moneda[];
  moneda1: Moneda;
  moneda2: Moneda;

  constructor(private service:ListarService, private service1:TipoCambioService, private router:Router) { 
    this.tipoCambio = new TipoCambio();
    this.monedas = [];
    this.moneda1 = new Moneda();
    this.moneda2 = new Moneda();
  }

  ngOnInit(): void {
    this.service.getMonedas()
    .subscribe(data=>{
      this.monedas = data;
      this.moneda1 = this.monedas.find(m=>m.id == 1) || new Moneda();
      this.moneda2 = this.monedas.find(m=>m.id == 2) || new Moneda();
      this.obtenerTipoCambio();
    })
  }

  obtenerTipoCambio(){
    this.tipoCambio.idMoneda1 = this.moneda1.id;
    this.tipoCambio.idMoneda2 = this.moneda2.id;
    this.service1.obtenerTipoCambio(this.tipoCambio)
    .subscribe(data=>{
      this.tipoCambio = data;
    })
  }

  changeMoneda(moneda: Moneda){
    console.log(moneda);
    if(this.moneda1.id !== this.moneda2.id) {
      this.obtenerTipoCambio();
    } else {
      this.tipoCambio.cambio = 1;
    }
    
  }

  actualizarTipoCambio(){
    if(this.moneda1.id !== this.moneda2.id) {
      this.tipoCambio.idMoneda1 = this.moneda1.id;
      this.tipoCambio.idMoneda2 = this.moneda2.id;
      this.service1.actualizarTipoCambio(this.tipoCambio)
      .subscribe(data=>{
        this.tipoCambio = data;
        alert('Se actualizó el tipo de cambio');
      })
    } else {
      alert('No se permite actualizar tipo de cambio de la misma moneda');
    }
  }

}
