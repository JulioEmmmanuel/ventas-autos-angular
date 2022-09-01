import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { FormsModule } from '@angular/forms';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './autos/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    AEspacioPipe,
    EstrellasComponent,
    DetalleAutosComponent,
    InicioComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      { path: "auto/:id", component: DetalleAutosComponent },
      { path: "inicio", component: InicioComponent},
      {path: "clientes", component: RegistroComponent},
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      { path: "**", redirectTo: "inicio", pathMatch: "full" }
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
