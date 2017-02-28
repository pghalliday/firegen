import generate from '../../../src/cli/generate';
import firegen from '../../../src';
import fs from 'fs';
import path from 'path';
import {
  DEFAULT_ROOT,
  CONFIG_FILE,
} from '../../../src/constants';

const config = {
  config: 'config',
};
const configFile = path.join(
  DEFAULT_ROOT,
  CONFIG_FILE,
);

describe('cli', () => {
  describe('generate', () => {
    before(async () => {
      sinon.stub(firegen, 'generate', () => Promise.resolve());
      sinon.stub(fs, 'readFile', (path, callback) => {
        callback(null, JSON.stringify(config));
      });
      await generate();
    });
    after(() => {
      firegen.generate.restore();
      fs.readFile.restore();
    });

    it('should load the config', async () => {
      fs.readFile.should.have.been.calledWith(configFile);
    });

    it('should generate the API and rules', async () => {
      firegen.generate.should.have.been.calledWith({
        root: DEFAULT_ROOT,
        config,
      });
    });
  });
});
