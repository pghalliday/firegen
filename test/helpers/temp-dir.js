import promisify from 'es6-promisify';
import rimraf from 'rimraf';
import mkdirp from 'mkdirp';

const primraf = promisify(rimraf);
const pmkdirp = promisify(mkdirp);

const PATH = '.temp';

async function reset() {
  await primraf(PATH);
  await pmkdirp(PATH);
}

export {
  PATH,
  reset,
};
