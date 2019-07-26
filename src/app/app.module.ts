import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibrosComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
