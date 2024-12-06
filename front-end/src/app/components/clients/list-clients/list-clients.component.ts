import { Component } from '@angular/core';
import { Usuario } from '../../../model/Usuario';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss',
})
export class ListClientsComponent {
  constructor(private authService: AuthService) {
    this.cliente = this.authService.getUser();
  }
  cliente: Usuario;
}
