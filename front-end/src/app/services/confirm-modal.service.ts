import { inject, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../shared/modal/confirm-modal/confirm-modal.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmModalService {
  constructor() {}
  private modalService = inject(NgbModal);
  public confirm(title: string, message: string): Observable<boolean> {
    return this.open(title, message);
  }
  private open(title: string, message: string): Observable<boolean> {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.title = title;
    return new Observable<boolean>((subscriber) => {
      modalRef.result.then(
        (result) => {
          subscriber.next(result === true);
          subscriber.complete();
        },
        () => {
          subscriber.next(false);
          subscriber.complete();
        }
      );
    });
  }
}
