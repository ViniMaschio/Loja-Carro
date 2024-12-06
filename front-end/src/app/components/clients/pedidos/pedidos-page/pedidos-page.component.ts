import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosFormComponent } from '../pedidos-form/pedidos-form.component';
import { Aluguel } from '../../../../model/Aluguel';
import { VendaService } from '../../../../services/venda.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pedidos-page',
  standalone: true,
  imports: [CommonModule, PedidosFormComponent],
  templateUrl: './pedidos-page.component.html',
  styleUrls: ['./pedidos-page.component.css'],
})
export class PedidosPageComponent implements OnInit {
  constructor(private vendaService: VendaService) {}
  aluguel$!: Observable<Aluguel[]>;
  ngOnInit() {
    this.aluguel$ = this.vendaService.getAlugueis();
  }
}
