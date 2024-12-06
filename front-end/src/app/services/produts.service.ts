import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { catchError, of } from 'rxjs';
import { AlertModalService } from './alert-modal.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutsService {
  constructor(
    private http: HttpClient,
    private alertModalService: AlertModalService
  ) {}

  getProducts() {
    return this.http.get<Produtos[]>(environment.API + '/carros').pipe(
      catchError((error: any) => {
        this.alertModalService.openDanger(
          'Erro ao buscar produtos: ' + error.message
        );
        return of([]);
      })
    );
  }

  getProductById(id: string) {
    return this.http.get<Produtos>(environment.API + '/carros/' + id);
  }
}
