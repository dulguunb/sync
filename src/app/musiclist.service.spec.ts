import { TestBed, inject } from '@angular/core/testing';

import { MusiclistService } from './musiclist.service';

describe('MusiclistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiclistService]
    });
  });

  it('should be created', inject([MusiclistService], (service: MusiclistService) => {
    expect(service).toBeTruthy();
  }));
});
