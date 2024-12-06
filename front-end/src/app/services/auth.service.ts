import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Salva o token de autenticação no storage
  login(user: Usuario): void {
    localStorage.setItem('id', user.id);
    localStorage.setItem('name', user.name);
    localStorage.setItem('authToken', user.token);
    localStorage.setItem('email', user.email);
  }

  // Remove o token de autenticação do storage
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.clear();
  }

  // Verifica se o usuário está logado
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getName(): string | null {
    return localStorage.getItem('name');
  }

  getUser(): Usuario {
    return {
      id: localStorage.getItem('id') || '',
      name: localStorage.getItem('name') || '',
      token: localStorage.getItem('authToken') || '',
      email: localStorage.getItem('email') || '',
    };
  }

  getClienteId(): string | null {
    return localStorage.getItem('id');
  }
}
