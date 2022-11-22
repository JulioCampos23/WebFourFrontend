import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaModel } from 'src/app/models/PersonaModel';
import { PersonaService } from 'src/app/services/persona.service';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})

export class CrearPersonaComponent implements OnInit {

  //personaf = new PersonaModel();
  listadoPersonas = new Array<PersonaModel>();
  titulo = 'Formulario de registro';
  formulario : FormGroup;
  listadoPerfiles = [ { "value" : "Cliente", "text" : "Cliente" },
                      { "value" : "Administrador", "text" : "Administardor" },
                      { "value" : "Usuario", "text" : "Usuario" } ];


  constructor(private personaService : PersonaService,
      private seguridadService : SeguridadService,
      private fb : FormBuilder) { 

        this.formulario = fb.group({
          documento : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(50) ] ],
          nombres : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
          apellidos : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
          telefono : ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(12) ] ],
          correo : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.email ] ],
          password : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(50) ] ],
          perfil : ['', [ Validators.required, Validators.minLength(1), Validators.maxLength(50) ] ],
        });
    //this.persona = new PersonaModel();
  }

  ngOnInit(): void {

    this.personaService.obtenerPersonas().subscribe( data => {
      this.listadoPersonas = Object.values(data);
    
    this.seguridadService.validarSession();

      //console.log(data);
    });
    
  }

  registrar(){
    let personaN = new PersonaModel();
    personaN.documento = this.formulario.controls["documento"].value;
    personaN.nombres = this.formulario.controls["nombres"].value;
    personaN.apellidos = this.formulario.controls["apellidos"].value;
    personaN.telefono = this.formulario.controls["telefono"].value.toString();
    personaN.correo = this.formulario.controls["correo"].value;
    personaN.perfil = this.formulario.controls["perfil"].value;
    personaN.password = this.formulario.controls["password"].value;

    // console.log(personaN)

    this.personaService.registrar(personaN).subscribe( result => {
      alert("Se insertó la persona, verificar correo del usuario");
      this.listadoPersonas.push(result);
      this.limpiarFormulario();
    }, error => {
      alert("No se logro insertar la persona");
    })

      
    //this.listadoPersonas.push(personaN);
  }

  limpiarFormulario(){
    this.formulario.reset();
  }

  eliminar(id : string){
    
    if( confirm("¿Desea eliminar la persona?") ){
      
      this.personaService.eliminar(id).subscribe( result =>{
        alert("Se elimino la persona");
        /*
        //Primera forma: Leer los datos de base de datos
        this.personaService.obtenerTodo().subscribe( data => {
          this.listadoPersonas = data;
        });
        */
        //Segunda forma : Eliminar del listado la persona        
        this.listadoPersonas = this.listadoPersonas.filter( x => !x.id.includes(id) );

      }, error => {
        alert("No se logro eliminar la persona");
      })

    }else{
      alert("No se va a eliminar el usuario")
    }

  }


}
