import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeputadoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://dadosabertos.camara.leg.br/api/v2/';
  }

  obterDeputados(siglaUf: string | null): Observable<any> {
    if (siglaUf)
      return this.http.get(`${this.URL}deputados?siglaUf=${siglaUf}&ordem=ASC`);
    return this.http.get(`${this.URL}deputados`);
    //return null;
  }

  dadosDoPartido(sigla: string | null): Observable<any> {
    if (sigla)
      return this.http.get(`${this.URL}/partidos?sigla=${sigla}&ordem=ASC`);
    return this.http.get(`${this.URL}/partidos`);
  }
}
