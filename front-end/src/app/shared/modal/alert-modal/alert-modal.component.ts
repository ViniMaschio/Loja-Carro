import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [],
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {
  constructor() {}
  activeModal = inject(NgbActiveModal);
  @Input() message!: string;
  @Input() typeAlert: string = 'success';
  ngOnInit() {}
}
