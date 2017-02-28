import {
  readFile,
} from 'fs';
import promisify from 'es6-promisify';

const preadFile = promisify(readFile);

async function loader(file, argNames, args) {
  const body = await preadFile(file);
  (new Function(...argNames, body))(...args);
};

export default loader;
