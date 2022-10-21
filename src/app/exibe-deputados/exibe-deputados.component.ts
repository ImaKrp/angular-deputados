import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from './../model/deputado.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-exibe-deputados',
  templateUrl: './exibe-deputados.component.html',
  styleUrls: ['./exibe-deputados.component.css'],
})
export class ExibeDeputadosComponent implements OnInit {
  deputados: Deputado[];
  search = new FormControl('');
  constructor(private ds: DeputadoService) {
    this.deputados = [];
  }

  onChange(): void {
    this.ds.obterDeputados(this.search.value).subscribe((res) => {
      this.deputados = res.dados;
    });
  }

  ngOnInit(): void {
    this.ds.obterDeputados(this.search.value).subscribe((res) => {
      this.deputados = res.dados;
    });
  }
}
