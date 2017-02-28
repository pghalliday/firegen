import {create} from '../../../../src/firegen/init/config';
import {
  readFile,
} from 'fs';
import promisify from 'es6-promisify';
import {
  PATH,
  reset,
} from '../../../helpers/temp-dir';
import path from 'path';
import {
  CONFIG_FILE,
} from '../../../../src/constants';

const preadFile = promisify(readFile);

const configFile = path.join(PATH, CONFIG_FILE);
const entry = 'entryFile';
const api = 'apiFile';
const database = 'databaseFile';
const storage = 'storageFile';

describe('firegen', () => {
  describe('init', () => {
    describe('config', () => {
      describe('create', () => {
        before(async () => {
          await reset();
          await create({
            root: PATH,
            config: {
              entry,
              output: {
                api,
                database,
                storage,
              },
            },
          });
        });

        it('should create the config file', async () => {
          const configJson = await preadFile(configFile);
          JSON.parse(configJson).should.eql({
            entry,
            output: {
              api,
              database,
              storage,
            },
          });
        });
      });
    });
  });
});
