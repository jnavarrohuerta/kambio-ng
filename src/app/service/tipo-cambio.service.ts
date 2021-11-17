import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operacion } from '../model/operacion';
import { TipoCambio } from '../model/tipoCambio';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor(private http:HttpClient) { }

  url = '';

  calcularTipoCambio(operacion: Operacion){
    this.url = '/api/tipocambio/calcular';
    return this.http.post<Operacion>(this.url, operacion);
  }

  obtenerTipoCambio(tipoCambio: TipoCambio){
    this.url = `/api/tipocambio/${tipoCambio.idMoneda1}/${tipoCambio.idMoneda2}`;
    return this.http.get<TipoCambio>(this.url);
  }

  actualizarTipoCambio(tipoCambio: TipoCambio){
    this.url = '/api/tipocambio/actualizar';
    return this.http.put<TipoCambio>(this.url, tipoCambio);
  }
}
