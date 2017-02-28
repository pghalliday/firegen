import init from '../../../../src/firegen/init';
import * as config from '../../../../src/firegen/init/config';
import * as entry from '../../../../src/firegen/init/entry';
import path from 'path';
import {
  PATH,
  reset,
} from '../../../helpers/temp-dir';
import {
  DEFAULT_ENTRY,
  DEFAULT_API,
  DEFAULT_DATABASE,
  DEFAULT_STORAGE,
} from '../../../../src/constants';

const entryFile = path.join(
  PATH,
  DEFAULT_ENTRY,
);

describe('firegen', () => {
  describe('init', () => {
    before(async () => {
      sinon.spy(config, 'create');
      sinon.spy(entry, 'create');
      await reset();
      await init(PATH);
    });
    after(() => {
      config.create.restore();
      entry.create.restore();
    });

    it('should create the default config file', () => {
      config.create.should.have.been.calledWith({
        root: PATH,
        config: {
          entry: DEFAULT_ENTRY,
          output: {
            api: DEFAULT_API,
            database: DEFAULT_DATABASE,
            storage: DEFAULT_STORAGE,
          },
        },
      });
    });

    it('should create the default entry file', () => {
      entry.create.should.have.been.calledWith({
        file: entryFile,
      });
    });
  });
});
