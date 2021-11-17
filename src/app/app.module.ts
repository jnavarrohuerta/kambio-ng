import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './tipoCambio/listar/listar.component';
import { RegistrarComponent } from './tipoCambio/registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { ListarService } from './service/listar.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ActualizarComponent } from './tipoCambio/actualizar/actualizar.component';
import { TipoCambioService } from './service/tipo-cambio.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    RegistrarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [ListarService, TipoCambioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
