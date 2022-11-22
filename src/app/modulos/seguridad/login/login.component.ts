import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private fb : FormBuilder, 
    private seguridadService : SeguridadService,
    private router : Router ) { 

    this.formulario = fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(100) ] ],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    });

  }

  ngOnInit(): void {
    //Indicar valor por defecto
    //this.formulario.controls["email"].setValue("admin@gmail.com");
  }

  login(){

    let email = this.formulario.controls["email"].value;
    let password = this.formulario.controls["password"].value;

    //alert("Procesando el login")

    this.seguridadService.login(email, password).subscribe( data => {
      let datos = Object.values(data);
      //console.log(data)
      //Almacenar en localstorage
    
      //Almacenar el token
      this.seguridadService.crearSession(datos[1]);
      
      // this.eventService.controlSessionEvent.emit(true);

      

      })


    //Consumir servicio
    
    //this.seguridadService.validarSession();

    //this.router.navigate(['/administracion/crear-persona'])

    setTimeout( () => {
      this.router.navigate(['/administracion/crear-persona'])
    }, 1000)
    //Redirecionar al home dependiendo del rol

  }

}