import { TestBed } from '@angular/core/testing';

import { ServicePdfService } from './service-pdf.service';

describe('ServicePdfService', () => {
  let service: ServicePdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
