import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/model/moneda';
import { ListarService } from 'src/app/service/listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  monedas: Moneda[];

  constructor(private service:ListarService, private router:Router) { 
    this.monedas = [];
  }

  ngOnInit(): void {
    this.service.getMonedas()
    .subscribe(data=>{
      this.monedas=data;
    })
  }

}
