import { TestBed, inject } from '@angular/core/testing';

import { BarcodeServiceService } from './barcode-service.service';

describe('BarcodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeServiceService]
    });
  });

  it('should be created', inject([BarcodeServiceService], (service: BarcodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
