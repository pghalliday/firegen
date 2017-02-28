import firegen from '../';
import path from 'path';
import fs from 'fs';
import promisify from 'es6-promisify';
import {
  DEFAULT_ROOT,
  CONFIG_FILE,
} from '../constants';

const configFile = path.join(
  DEFAULT_ROOT,
  CONFIG_FILE,
);

async function generate() {
  const preadFile = promisify(fs.readFile);
  const configJson = await preadFile(configFile);
  await firegen.generate({
    root: DEFAULT_ROOT,
    config: JSON.parse(configJson),
  });
}

export default generate;
