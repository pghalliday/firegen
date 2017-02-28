import path from 'path';
import {writeFile} from 'fs';
import mkdirp from 'mkdirp';
import promisify from 'es6-promisify';

const pwriteFile = promisify(writeFile);
const pmkdirp = promisify(mkdirp);

async function generate({root, config}) {
  const files = [
    path.resolve(root, config.output.api),
    path.resolve(root, config.output.database),
    path.resolve(root, config.output.storage),
  ];
  const dirsAndFiles = files.map((file) => ({
    dir: path.dirname(file),
    file: file,
  }));
  const promises = dirsAndFiles.map((dirAndFile) => {
    return (async () => {
      await pmkdirp(dirAndFile.dir);
      await pwriteFile(dirAndFile.file, '');
    })();
  });
  await Promise.all(promises);
}

export default generate;
