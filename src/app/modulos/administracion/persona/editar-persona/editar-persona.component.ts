import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaModel } from 'src/app/models/personaModel';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss']
})

export class EditarPersonaComponent implements OnInit {

  id : string;
  titulo = 'Formulario de actualización';
  formulario : FormGroup;
  listadoPerfiles = [ { "value" : "Cliente", "text" : "Cliente" },
                      { "value" : "Administrador", "text" : "Administardor" },
                      { "value" : "Usuario", "text" : "Usuario" } ];

  constructor(private router: Router, 
            private activatedRoute : ActivatedRoute,
            private personaService : PersonaService,
            private fb : FormBuilder) { 

            this.formulario = fb.group({
                documento : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(50) ] ],
                nombres : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
                apellidos : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
                telefono : ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(12) ] ],
                correo : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.email ] ],
                password : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(250) ] ],
                perfil : ['', [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ],
            });

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];  

    this.personaService.obtener(this.id).subscribe( data => {
      this.formulario.controls["documento"].setValue(data.documento);
      this.formulario.controls["nombres"].setValue(data.nombres);
      this.formulario.controls["apellidos"].setValue(data.apellidos);
      this.formulario.controls["telefono"].setValue(data.telefono);
      this.formulario.controls["correo"].setValue(data.correo);
      this.formulario.controls["perfil"].setValue(data.perfil);
      this.formulario.controls["password"].setValue(data.password);      
    });
    
    
  };

  actualizar(){
    
    let personaN = new PersonaModel();

    personaN.id = this.id;

    personaN.documento = this.formulario.controls["documento"].value;
    personaN.nombres = this.formulario.controls["nombres"].value;
    personaN.apellidos = this.formulario.controls["apellidos"].value;
    personaN.telefono = this.formulario.controls["telefono"].value.toString();
    personaN.correo = this.formulario.controls["correo"].value;
    personaN.perfil = this.formulario.controls["perfil"].value;
    personaN.password = this.formulario.controls["password"].value;

    this.personaService.actualizar(personaN).subscribe( data => {
      alert("Se actualizo la persona");
      this.router.navigate(['administracion/crear-persona']);
    }, error => {
      alert("La persona no existe");
    })

  }


}