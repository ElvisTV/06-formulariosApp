import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  
  miFormulario: FormGroup = this.fb.group({
    nombre      : [ '' , [Validators.required, Validators.minLength(3) ] ],
    favoritos   : this.fb.array( [
      [ 'Hotel California', Validators.required ],
      [ 'The sound of Silence', Validators.required ],
      [ 'Let her go', Validators.required ],
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required );

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  campoEsValido ( campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched 
  }

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) return;
    this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();
  }

  guardar(): void {
    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  } 
  borrar( i: number ): void {
     this.miFormulario.get('favoritos')

     this.favoritosArr.removeAt(i);

     
  }
  
}
