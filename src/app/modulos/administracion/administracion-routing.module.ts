import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMensualidadComponent } from './crear-mensualidad/crear-mensualidad.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { CrearTarifaComponent } from './crear-tarifa/crear-tarifa.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component'; 


const routes: Routes = [
  { path: 'crear-persona', component: CrearPersonaComponent },
  { path: 'crear-mensualidad', component: CrearMensualidadComponent },
  { path: 'crear-tarifa', component: CrearTarifaComponent },
  { path: 'crear-vehiculo', component: CrearVehiculoComponent },
  { path: 'persona-edit/:id', component: EditarPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
