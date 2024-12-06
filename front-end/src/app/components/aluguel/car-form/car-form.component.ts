import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Produtos } from '../../../model/Produtos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Aluguel } from '../../../model/Aluguel';
import { VendaService } from '../../../services/venda.service';
import { Router } from '@angular/router';
import { AlertModalService } from '../../../services/alert-modal.service';
import { ConfirmModalService } from '../../../services/confirm-modal.service';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit, OnChanges {
  constructor(
    private vendaService: VendaService,
    private router: Router,
    private alertModalService: AlertModalService,
    private confirmModalService: ConfirmModalService
  ) {}

  @Input() produto!: Produtos;
  dias: number = 1;
  valorFinal: number = 0;
  aluguel!: Aluguel;

  ngOnInit(): void {
    if (this.produto) {
      this.calcularValorFinal();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['produto'] && this.produto) {
      this.calcularValorFinal();
    }
  }

  calcularValorFinal(): void {
    if (this.produto) {
      this.valorFinal = this.produto.preco * this.dias;
    }
  }

  onSubmit(): void {
    this.aluguel = {
      id: '',
      produtoId: this.produto.id,
      clienteId: '',
      qntdDias: this.dias,
      valorTotal: this.valorFinal,
    };

    this.vendaService.vender(this.aluguel).subscribe((res) => {
      this.alertModalService.openSuccess('Pedido realizado com sucesso!');
      this.router.navigate(['login/pedidos']);
    });
  }

  alterarDias(quantidade: number) {
    this.dias += quantidade;
    if (this.dias < 1) {
      this.dias = 1;
    }
    this.calcularValorFinal();
  }
  confirma() {
    this.confirmModalService
      .confirm('Confirmar aluguel', 'Tem certeza que deseja Alugar?')
      .subscribe((result) => {
        if (result) {
          this.onSubmit();
        }
      });
  }
}
