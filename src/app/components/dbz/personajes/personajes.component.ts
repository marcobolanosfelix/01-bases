import { DbzService } from './../services/dbz.service';
import { Component, Input } from '@angular/core';

import { Personaje } from './../interfaces/dbz.interfaces';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input() public personajes: Personaje[] = [];
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(
    private dbzService: DbzService
  ) { }

}
