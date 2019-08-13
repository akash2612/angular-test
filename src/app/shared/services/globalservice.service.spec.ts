import { TestBed } from '@angular/core/testing';

import { GlobalserviceService } from './globalservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('GlobalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GlobalserviceService = TestBed.get(GlobalserviceService);
    expect(service).toBeTruthy();
  });
});
