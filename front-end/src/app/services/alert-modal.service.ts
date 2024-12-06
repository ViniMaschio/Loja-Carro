import { inject, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../shared/modal/alert-modal/alert-modal.component';
enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  PRIMARY = 'primary',
  WARNING = 'warning',
}
@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor() {}
  private modalService = inject(NgbModal);
  private open(menssage: String, type: AlertTypes) {
    const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.message = menssage;
    modalRef.componentInstance.typeAlert = type;
  }
  openDanger(menssage: String) {
    this.open(menssage, AlertTypes.DANGER);
  }
  openSuccess(menssage: String) {
    this.open(menssage, AlertTypes.SUCCESS);
  }
  openPrimary(menssage: String) {
    this.open(menssage, AlertTypes.PRIMARY);
  }
  openWarning(menssage: String) {
    this.open(menssage, AlertTypes.WARNING);
  }
}
