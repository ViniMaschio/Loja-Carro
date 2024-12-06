/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdutsService } from './produts.service';

describe('Service: Produts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutsService]
    });
  });

  it('should ...', inject([ProdutsService], (service: ProdutsService) => {
    expect(service).toBeTruthy();
  }));
});
