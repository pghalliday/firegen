import {
  writeFile,
} from 'fs';
import mkdirp from 'mkdirp';
import promisify from 'es6-promisify';
import path from 'path';

const pmkdirp = promisify(mkdirp);
const pwriteFile = promisify(writeFile);

async function create({file}) {
  const dirname = path.dirname(file);
  await pmkdirp(dirname);
  await pwriteFile(file, 'api.add(\'my first api\')\n');
}

export {
  create,
};
