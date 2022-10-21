import { Component, OnInit } from '@angular/core';
import { Partido } from '../model/partido';
import { DeputadoService } from './../model/deputado.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exibe-partidos',
  templateUrl: './exibe-partidos.component.html',
  styleUrls: ['./exibe-partidos.component.css'],
})
export class ExibePartidosComponent implements OnInit {
  partidos: Partido[];
  search = new FormControl('');
  constructor(private ds: DeputadoService) {
    this.partidos = [];
  }

  onChange(): void {
    this.ds.dadosDoPartido(this.search.value).subscribe((res) => {
      this.partidos = res.dados;
    });
  }

  ngOnInit(): void {
    this.ds.dadosDoPartido(null).subscribe((res) => {
      this.partidos = res.dados;
    });
  }
}
