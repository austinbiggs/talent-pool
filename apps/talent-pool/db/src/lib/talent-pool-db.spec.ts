import { talentPoolDb } from './talent-pool-db';

describe('talentPoolDb', () => {
  it('should work', () => {
    expect(talentPoolDb()).toEqual('talent-pool-db');
  });
});
