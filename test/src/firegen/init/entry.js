import {create} from '../../../../src/firegen/init/entry';
import loader from '../../../helpers/loader';
import {
  PATH,
  reset,
} from '../../../helpers/temp-dir';
import path from 'path';

const entryFile = path.join(
  PATH,
  'sub',
  'sub',
  'entry.js',
);

describe('firegen', () => {
  describe('init', () => {
    describe('entry', () => {
      describe('create', () => {
        before(async () => {
          await reset();
          await create({
            file: entryFile,
          });
        });

        it('should create the entry file', async () => {
          const api = {
            add: sinon.spy(),
          };
          await loader(entryFile, ['api'], [api]);
          api.add.should.have.been.calledWith('my first api');
        });
      });
    });
  });
});
