import { AuthGuard } from '../../guard/auth.guard';
import { Routes } from '@angular/router';
import { ProdutosPageComponent } from './produtos-page/produtos-page.component';
import { AluguelPageComponent } from '../aluguel/aluguel-page/aluguel-page.component';

export const ProdutosRoutes: Routes = [
  {
    path: '',
    component: ProdutosPageComponent,
  },
  {
    path: 'alugar/:id',
    component: AluguelPageComponent,
    canActivate: [AuthGuard],
  },
];
