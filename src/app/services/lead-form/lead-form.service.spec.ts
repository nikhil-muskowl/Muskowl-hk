import { TestBed, inject } from '@angular/core/testing';

import { LeadFormService } from './lead-form.service';

describe('LeadFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadFormService]
    });
  });

  it('should be created', inject([LeadFormService], (service: LeadFormService) => {
    expect(service).toBeTruthy();
  }));
});
