import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './tipoCambio/actualizar/actualizar.component';
import { ListarComponent } from './tipoCambio/listar/listar.component';
import { RegistrarComponent } from './tipoCambio/registrar/registrar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'actualizar', component: ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
