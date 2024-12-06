import { Routes } from '@angular/router';
import { AuthClientPageComponent } from './auth-client-page/auth-client-page.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { PedidosPageComponent } from './pedidos/pedidos-page/pedidos-page.component';
import { AuthGuard } from '../../guard/auth.guard';

export const ClienteRoutes: Routes = [
  { path: '', component: AuthClientPageComponent },
  {
    path: 'cliente',
    component: ListClientsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pedidos',
    component: PedidosPageComponent,
    canActivate: [AuthGuard],
  },
];
