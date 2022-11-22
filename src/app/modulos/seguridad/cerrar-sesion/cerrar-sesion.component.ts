import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss']
})
export class CerrarSesionComponent implements OnInit {
  constructor(private seguridadService : SeguridadService,
    private router : Router,
    ) { }

    ngOnInit(): void {
      this.seguridadService.cerrarSession();
      this.router.navigate(['']);
    }
 
}
