import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Aluguel } from '../../../../model/Aluguel';
import { ProdutsService } from '../../../../services/produts.service';
import { Produtos } from '../../../../model/Produtos';
import { take } from 'rxjs';
import { VendaService } from '../../../../services/venda.service';
import { Router } from '@angular/router';
import { ConfirmModalService } from '../../../../services/confirm-modal.service';

@Component({
  selector: 'app-pedidos-form',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.scss'],
})
export class PedidosFormComponent implements OnInit {
  constructor(
    private produtoService: ProdutsService,
    private vendaService: VendaService,
    private confirmModalService: ConfirmModalService
  ) {}
  ngOnInit(): void {
    this.carregarVendas();
  }
  private carregarVendas() {
    this.produtoService
      .getProductById(this.aluguel.produtoId)
      .pipe(take(1))
      .subscribe((produtos) => {
        this.produto = produtos;
      });
  }
  @Input() aluguel!: Aluguel;
  isProdutoVisible = false;
  produto!: Produtos;

  toggleProduto() {
    this.isProdutoVisible = !this.isProdutoVisible;
  }
  cancelarAluguel() {
    this.vendaService
      .deleteAluguel(this.aluguel.id)
      .pipe(take(1))
      .subscribe({
        next: () => {
          window.location.reload();
        },
        error: (erro) => {
          console.error('Erro ao cancelar aluguel:', erro);
        },
      });
  }

  confirma() {
    this.confirmModalService
      .confirm('Cancelar aluguel', 'Tem certeza que deseja cancelar o aluguel?')
      .subscribe((result) => {
        if (result) {
          this.cancelarAluguel();
        }
      });
  }
}
