import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kambio-ng';

  constructor(private router:Router){}

  listarTipoCambio(){
    this.router.navigate(['listar']);
  }

  registrarTipoCambio(){
    this.router.navigate(['registrar'])
  }

  actualizarTipoCambio(){
    this.router.navigate(['actualizar'])
  }
}
