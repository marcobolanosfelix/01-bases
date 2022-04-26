import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  public title: string = 'Contador App';
  public numero: number = 0;
  public base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  public acumular(valor: number): number {
    return this.numero += valor;
  }

}
