import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from './../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() { }


  public agregarNuevoPersonaje( argumento: Personaje ) {
    // this.personajes.push( argumento );
  }


}
