import * as config from './config';
import * as entry from './entry';
import path from 'path';
import {
  DEFAULT_ENTRY,
  DEFAULT_API,
  DEFAULT_DATABASE,
  DEFAULT_STORAGE,
} from '../../constants';

async function init(root) {
  await Promise.all([
    config.create({
      root,
      config: {
        entry: DEFAULT_ENTRY,
        output: {
          api: DEFAULT_API,
          database: DEFAULT_DATABASE,
          storage: DEFAULT_STORAGE,
        },
      },
    }),
    entry.create({
      file: path.join(root, DEFAULT_ENTRY),
    }),
  ]);
}

export default init;
