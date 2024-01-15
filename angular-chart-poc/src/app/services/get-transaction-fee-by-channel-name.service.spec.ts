import { TestBed } from '@angular/core/testing';

import { GetTransactionFeeByChannelNameService } from './get-transaction-fee-by-channel-name.service';

describe('GetTransactionFeeByChannelNameService', () => {
  let service: GetTransactionFeeByChannelNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTransactionFeeByChannelNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
