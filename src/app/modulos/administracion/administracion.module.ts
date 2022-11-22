import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { CrearTarifaComponent } from './crear-tarifa/crear-tarifa.component';
import { CrearMensualidadComponent } from './crear-mensualidad/crear-mensualidad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
//import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';




@NgModule({
  declarations: [
    CrearPersonaComponent,
    CrearVehiculoComponent,
    CrearTarifaComponent,
    CrearMensualidadComponent,
    EditarPersonaComponent
    
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
