import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operacion } from '../model/operacion';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor(private http:HttpClient) { }

  url = '/api/tipocambio/calcular';

  calcularTipoCambio(operacion: Operacion){
    return this.http.post<Operacion>(this.url, operacion);
  }
}
