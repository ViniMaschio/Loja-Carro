import { Injectable } from '@angular/core';
import { Aluguel } from '../model/Aluguel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  vender(aluguel: Aluguel) {
    aluguel.clienteId = this.authService.getClienteId() || '';
    return this.http.post<Aluguel>(
      environment.API + '/aluguel',
      JSON.stringify({
        produtoId: aluguel.produtoId,
        clienteId: aluguel.clienteId,
        qntdDias: aluguel.qntdDias,
        valorTotal: aluguel.valorTotal,
      })
    );
  }

  getAlugueis() {
    return this.http.get<Aluguel[]>(
      environment.API + '/aluguel?clienteId=' + this.authService.getClienteId()
    );
  }
  deleteAluguel(id: string) {
    return this.http.delete(environment.API + '/aluguel/' + id);
  }
}
