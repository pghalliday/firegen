import init from '../../../src/cli/init';
import firegen from '../../../src';
import {
  DEFAULT_ROOT,
} from '../../../src/constants';

describe('cli', () => {
  describe('init', () => {
    before(async () => {
      sinon.stub(firegen, 'init', () => Promise.resolve());
      await init();
    });
    after(() => {
      firegen.init.restore();
    });

    it('should initialise an API project', async () => {
      firegen.init.should.have.been.calledWith(DEFAULT_ROOT);
    });
  });
});
