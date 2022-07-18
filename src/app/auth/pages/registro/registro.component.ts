import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TO DO: Temporal
  nombreApellidoPattern: string = '([a-zA-A]+) ([a-zA-Z]+)';

  miFormulario: FormGroup  = this.fb.group( {
    nombre: ['', [ Validators.required, Validators.pattern(this.nombreApellidoPattern) ] ]
  } )

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoNoValido ( campo: string ) {
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  submitDeFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
