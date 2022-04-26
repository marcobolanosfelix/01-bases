import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';
import { HeroeComponent } from './heroe/heroe.component';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoHeroesComponent
    ],
    exports: [
        ListadoHeroesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }