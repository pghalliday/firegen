import path from 'path';
import {writeFile} from 'fs';
import mkdirp from 'mkdirp';
import promisify from 'es6-promisify';

const pwriteFile = promisify(writeFile);
const pmkdirp = promisify(mkdirp);

async function generate({root, config}) {
  await Promise.all([
    ['api', ''],
    ['database', ''],
    ['storage', ''],
  ].map(async ([prop, content]) => {
    const file = path.resolve(root, config.output[prop]);
    await pmkdirp(path.dirname(file));
    await pwriteFile(file, content);
  }));
}

export default generate;
