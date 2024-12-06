import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/clients/cliente.routing').then(
        (m) => m.ClienteRoutes
      ),
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./components/produtos/produtos.routing').then(
        (m) => m.ProdutosRoutes
      ),
  },
  { path: '**', component: NotFoundComponent },
];
