import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { ExibePartidosComponent } from './exibe-partidos/exibe-partidos.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ExibeDeputadosComponent,
    PageNotFoundComponent,
    ExibePartidosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
