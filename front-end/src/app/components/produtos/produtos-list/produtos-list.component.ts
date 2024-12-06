import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss'],
})
export class ProdutosListComponent implements OnInit {
  constructor() {}
  @Input() carName: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';
  @Input() id: string = '';

  ngOnInit() {}
}
