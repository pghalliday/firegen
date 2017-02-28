import generate from '../../../src/firegen/generate';
import {stat} from 'fs';
import promisify from 'es6-promisify';
import path from 'path';
import {create} from '../../../src/firegen/init/entry';
import {
  PATH,
  reset,
} from '../../helpers/temp-dir';

const pstat = promisify(stat);

const root = path.join(
  PATH,
  'project',
);
const entry = 'entry';
const api = 'sub/api';
const database = 'sub/database';
const storage = 'sub/storage';
const config = {
  entry,
  output: {
    api,
    database,
    storage,
  },
};
const entryFile = path.join(
  root,
  entry,
);
const apiFile = path.join(
  root,
  api,
);
const databaseFile = path.join(
  root,
  database,
);
const storageFile = path.join(
  root,
  storage,
);

describe('firegen', () => {
  describe('generate', () => {
    before(async () => {
      await reset();
      await create({
        file: entryFile,
      });
      await generate({
        root,
        config,
      });
    });

    it('should create the api file', async () => {
      const stats = await pstat(apiFile);
      stats.isFile().should.be.true;
    });

    it('should create the database file', async () => {
      const stats = await pstat(databaseFile);
      stats.isFile().should.be.true;
    });

    it('should create the storage file', async () => {
      const stats = await pstat(storageFile);
      stats.isFile().should.be.true;
    });
  });
});
