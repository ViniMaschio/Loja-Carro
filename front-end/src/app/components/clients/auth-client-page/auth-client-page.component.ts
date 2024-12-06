import { Component, OnInit } from '@angular/core';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';
import { CreateClienteComponent } from '../create-cliente/create-cliente.component';

@Component({
  selector: 'app-auth-client-page',
  standalone: true,
  imports: [LoginClienteComponent, CreateClienteComponent],
  templateUrl: './auth-client-page.component.html',
  styleUrls: ['./auth-client-page.component.scss'],
})
export class AuthClientPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
