import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutsService } from '../../../services/produts.service';
import { Observable } from 'rxjs';
import { Produtos } from '../../../model/Produtos';
import { CarFormComponent } from '../car-form/car-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluguel-page',
  standalone: true,
  imports: [CarFormComponent, CommonModule],
  templateUrl: './aluguel-page.component.html',
  styleUrls: ['./aluguel-page.component.scss'],
})
export class AluguelPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private produtsService: ProdutsService
  ) {}
  id: any;
  produto$!: Observable<Produtos>;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.loadProduct(this.id);
    });
  }

  loadProduct(id: string): void {
    this.produto$ = this.produtsService.getProductById(id);
  }
}
