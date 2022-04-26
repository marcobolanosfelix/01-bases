import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorModule } from './components/contador/contador.module';
import { DbzModule } from './components/dbz/dbz.module';
import { HeroesModule } from './components/heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    DbzModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
