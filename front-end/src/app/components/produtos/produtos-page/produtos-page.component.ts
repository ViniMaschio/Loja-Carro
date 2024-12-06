import { Component, OnInit } from '@angular/core';
import { ProdutosListComponent } from '../produtos-list/produtos-list.component';
import { ProdutsService } from '../../../services/produts.service';
import { Produtos } from '../../../model/Produtos';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [ProdutosListComponent, CommonModule],
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.scss'],
})
export class ProdutosPageComponent implements OnInit {
  constructor(private produtsServices: ProdutsService) {}
  produtos$!: Observable<Produtos[]>;
  ngOnInit() {
    this.produtos$ = this.produtsServices.getProducts();
  }
}
