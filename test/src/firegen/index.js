import * as firegen from '../../../src/firegen';

describe('firegen', () => {
  it('should export init', () => {
    firegen.init.should.be.ok;
  });
  it('should export generate', () => {
    firegen.generate.should.be.ok;
  });
});
