import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];
  
  constructor() {
    console.log('Servicio inicializado')
  }


  public get personajes(): Personaje[] {
    return [...this._personajes];
  }

  public agregarPersonaje( personaje: Personaje ) {
    this._personajes.push(personaje);
  }


}
