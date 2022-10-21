import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { ExibePartidosComponent } from './exibe-partidos/exibe-partidos.component';

const routes: Routes = [
  { path: 'exibedeputados', component: ExibeDeputadosComponent },
  { path: 'exibepartidos', component: ExibePartidosComponent },
  { path: '', redirectTo: '/exibedeputados', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
