import {
  writeFile,
} from 'fs';
import mkdirp from 'mkdirp';
import promisify from 'es6-promisify';
import path from 'path';
import {
  CONFIG_FILE,
} from '../../constants';

const pmkdirp = promisify(mkdirp);
const pwriteFile = promisify(writeFile);

async function create({root, config}) {
  const configFile = path.join(root, CONFIG_FILE);
  const dirname = path.dirname(configFile);
  await pmkdirp(dirname);
  await pwriteFile(configFile, JSON.stringify(config, null, 2));
}

export {
  create,
};
