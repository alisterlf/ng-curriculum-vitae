import { TestBed, inject } from '@angular/core/testing';

import { InMemResumeService } from './in-mem-resume.service';

describe('InMemResumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemResumeService]
    });
  });

  it('should be created', inject([InMemResumeService], (service: InMemResumeService) => {
    expect(service).toBeTruthy();
  }));
});
