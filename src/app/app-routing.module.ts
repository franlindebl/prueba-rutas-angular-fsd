import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'pelis', component: PeliculasComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
