import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root',
})
export class AcountService {
  constructor(private http: HttpClient) {}
  environment: any = environment;

  login(user: String) {
    return this.http.get<Cliente[]>(environment.API + '/cliente?email=' + user);
  }

  createAcount(cliente: any) {
    return this.http.post<Cliente>(
      environment.API + '/cliente',
      JSON.stringify(cliente)
    );
  }
}
