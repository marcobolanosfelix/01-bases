import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  public obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre(): void {
    this.nombre = 'Spriderman';
  }

  public cambiarEdad(): void {
    this.edad = 30;
  }

}
