import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent {
  public heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  public heroeBorrado: string = "";

  public borrar(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }
  

}
