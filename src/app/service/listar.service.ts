import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Moneda } from '../model/moneda';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  constructor(private http:HttpClient) { }

  url = '/api/monedas';

  getMonedas(){
    return this.http.get<Moneda[]>(this.url);
  }
  
}
