import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'The sound of silence' },
      { id: 2, nombre: 'Hotel California' }
    ]
  }

  eliminar( index: number): void {
    this.persona.favoritos.slice(index,1);
  }

  guardar(): void {
    console.log('Formulario Posteado');
  }


}
